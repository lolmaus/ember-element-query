import Modifier from 'ember-modifier';
import { action } from '@ember/object';
import window from 'ember-window-mock';
import { debounceTask } from 'ember-lifeline';
import {
  EQInfo,
  ModifierArgs,
  SIZES_RATIO_DEFAULT,
  Sizes,
  SIZES_DEFAULT,
  SIZES_HEIGHT_DEFAULT,
  Args,
} from 'ember-element-query';
import { registerDestructor } from '@ember/destroyable';
import { inject as service } from '@ember/service';
export interface SizeObject {
  name: string;
  value: number;
  index: number;
}

export type RangeDirection = 'at' | 'from' | 'to';

interface ResizeObserverService {
  observe(element: HTMLElement, callback?: () => void): void;
  unobserve(element: HTMLElement, callback?: () => void): void;
  isEnabled: boolean;
}

/** @internal */
export default class ElementQueryModifier extends Modifier<ModifierArgs> {
  // -------------------
  // Services
  // -------------------

  @service resizeObserver!: ResizeObserverService;

  // -------------------
  // Properties
  // -------------------

  sizesDefault: Sizes = SIZES_DEFAULT;
  sizesHeightDefault: Sizes = SIZES_HEIGHT_DEFAULT;
  sizesRatioDefault: Sizes = SIZES_RATIO_DEFAULT;

  _element?: HTMLElement; // For some reason, this._element is not always available
  _firstCall = true;

  named: Args = {};

  // -------------------
  // Computed properties
  // -------------------

  get width(): number {
    if (!this._element) throw new Error('Expected this._element to be available');
    return this._element.clientWidth;
  }

  get height(): number {
    if (!this._element) throw new Error('Expected this._element to be available');
    return this._element.clientHeight;
  }

  get debounce(): number {
    const { debounce } = this.named;

    return debounce == null ? 100 : debounce;
  }

  get ratio(): number {
    return this.width / this.height;
  }

  get sizes(): Sizes | undefined {
    const { sizes } = this.named;

    // Explicitly opt into default sizes
    if (sizes === true) {
      return this.sizesDefault;
    }

    // Provide own sizes
    else if (sizes) {
      return sizes;
    }

    // Explicitly opt out of sizes
    else if (!sizes && sizes !== undefined) {
      return undefined;
    }

    // Default
    else {
      return this.sizesDefault;
    }
  }

  get sizesHeight(): Sizes | undefined {
    const { sizesHeight } = this.named;

    // Explicitly opt into default sizes
    if (sizesHeight === true) {
      return this.sizesHeightDefault;
    }

    // Provide own sizes
    else if (sizesHeight) {
      return sizesHeight;
    }

    // Default value
    else {
      return undefined;
    }
  }

  get sizesRatio(): Sizes | undefined {
    const { sizesRatio } = this.named;

    // Explicitly opt into default sizes
    if (sizesRatio === true) {
      return this.sizesRatioDefault;
    }

    // Provide own sizes
    else if (sizesRatio) {
      return sizesRatio;
    }

    // Default value
    else {
      return undefined;
    }
  }

  get sizeObjectsWidthSortedAsc(): SizeObject[] | undefined {
    return this.sizes && this.buildSizeObjectsSortedAsc(this.sizes);
  }

  get sizeObjectsHeightSortedAsc(): SizeObject[] | undefined {
    return this.sizesHeight && this.buildSizeObjectsSortedAsc(this.sizesHeight);
  }

  get sizeObjectsRatioSortedAsc(): SizeObject[] | undefined {
    return this.sizesRatio && this.buildSizeObjectsSortedAsc(this.sizesRatio);
  }

  get sizeObjectWidthAt(): SizeObject | undefined {
    return (
      this.sizeObjectsWidthSortedAsc &&
      this.findSizeObjectAt(this.sizeObjectsWidthSortedAsc, this.width)
    );
  }

  get sizeObjectHeightAt(): SizeObject | undefined {
    return (
      this.sizeObjectsHeightSortedAsc &&
      this.findSizeObjectAt(this.sizeObjectsHeightSortedAsc, this.height)
    );
  }

  get sizeObjectRatioAt(): SizeObject | undefined {
    if (!this.width && !this.height) {
      return;
    }

    return (
      this.sizeObjectsRatioSortedAsc &&
      this.findSizeObjectAt(this.sizeObjectsRatioSortedAsc, this.ratio)
    );
  }

  get sizeObjectsWidthFrom(): SizeObject[] | undefined {
    if (!this.sizeObjectsWidthSortedAsc || !this.sizeObjectWidthAt) {
      return;
    }

    const nextIndex = this.sizeObjectWidthAt.index + 1;
    return this.sizeObjectsWidthSortedAsc.slice(0, nextIndex);
  }

  get sizeObjectsHeightFrom(): SizeObject[] | undefined {
    if (!this.sizeObjectHeightAt || !this.sizeObjectsHeightSortedAsc) {
      return;
    }

    const nextIndex = this.sizeObjectHeightAt.index + 1;
    return this.sizeObjectsHeightSortedAsc.slice(0, nextIndex);
  }

  get sizeObjectsRatioFrom(): SizeObject[] | undefined {
    if (!this.sizeObjectRatioAt || !this.sizeObjectsRatioSortedAsc) {
      return;
    }

    const nextIndex = this.sizeObjectRatioAt.index + 1;
    return this.sizeObjectsRatioSortedAsc.slice(0, nextIndex);
  }

  get sizeObjectsWidthTo(): SizeObject[] | undefined {
    if (!this.sizeObjectWidthAt || !this.sizeObjectsWidthSortedAsc) {
      return;
    }

    const index = this.sizeObjectWidthAt.index;
    return this.sizeObjectsWidthSortedAsc.slice(index);
  }

  get sizeObjectsHeightTo(): SizeObject[] | undefined {
    if (!this.sizeObjectHeightAt || !this.sizeObjectsHeightSortedAsc) {
      return;
    }

    const index = this.sizeObjectHeightAt.index;
    return this.sizeObjectsHeightSortedAsc.slice(index);
  }

  get sizeObjectsRatioTo(): SizeObject[] | undefined {
    if (!this.sizeObjectRatioAt || !this.sizeObjectsRatioSortedAsc) {
      return;
    }

    const index = this.sizeObjectRatioAt.index;
    return this.sizeObjectsRatioSortedAsc.slice(index);
  }

  get attributesWidthAt(): string[] {
    if (!this.sizeObjectWidthAt) {
      return [];
    }

    return [this.convertSizeToAttribute(this.sizeObjectWidthAt.name, 'at')];
  }

  get attributesWidthFrom(): string[] {
    if (!this.sizeObjectsWidthFrom) {
      return [];
    }

    return this.sizeObjectsWidthFrom.map((toSizeObject) => {
      return this.convertSizeToAttribute(toSizeObject.name, 'from');
    });
  }

  get attributesWidthTo(): string[] {
    if (!this.sizeObjectsWidthTo) {
      return [];
    }

    return this.sizeObjectsWidthTo.map((fromSizeObject) => {
      return this.convertSizeToAttribute(fromSizeObject.name, 'to');
    });
  }

  get attributesWidth(): string[] {
    return [...this.attributesWidthAt, ...this.attributesWidthFrom, ...this.attributesWidthTo];
  }

  get attributesHeightAt(): string[] {
    if (!this.sizeObjectHeightAt) {
      return [];
    }

    return [this.convertSizeToAttribute(this.sizeObjectHeightAt.name, 'at')];
  }

  get attributesHeightFrom(): string[] {
    if (!this.sizeObjectsHeightFrom) {
      return [];
    }

    return this.sizeObjectsHeightFrom.map((fromSizeObject) => {
      return this.convertSizeToAttribute(fromSizeObject.name, 'from');
    });
  }

  get attributesHeightTo(): string[] {
    if (!this.sizeObjectsHeightTo) {
      return [];
    }

    return this.sizeObjectsHeightTo.map((toSizeObject) => {
      return this.convertSizeToAttribute(toSizeObject.name, 'to');
    });
  }

  get attributesHeight(): string[] {
    return [...this.attributesHeightAt, ...this.attributesHeightFrom, ...this.attributesHeightTo];
  }

  get attributesRatioAt(): string[] {
    if (!this.sizeObjectRatioAt) {
      return [];
    }

    return [this.convertSizeToAttribute(this.sizeObjectRatioAt.name, 'at')];
  }

  get attributesRatioFrom(): string[] {
    if (!this.sizeObjectsRatioFrom) {
      return [];
    }

    return this.sizeObjectsRatioFrom.map((fromSizeObject) => {
      return this.convertSizeToAttribute(fromSizeObject.name, 'from');
    });
  }

  get attributesRatioTo(): string[] {
    if (!this.sizeObjectsRatioTo) {
      return [];
    }

    return this.sizeObjectsRatioTo.map((toSizeObject) => {
      return this.convertSizeToAttribute(toSizeObject.name, 'to');
    });
  }

  get attributesRatio(): string[] {
    return [...this.attributesRatioAt, ...this.attributesRatioFrom, ...this.attributesRatioTo];
  }

  get attributes(): string[] {
    return [...this.attributesWidth, ...this.attributesHeight, ...this.attributesRatio];
  }

  get attributesRecord(): Record<string, true> {
    return this.attributes.reduce((result, attr) => {
      result[attr] = true;
      return result;
    }, {} as Record<string, true>);
  }

  get attributesWidthAtRetired(): string[] {
    if (!this.sizeObjectsWidthSortedAsc || !this.sizeObjectWidthAt) {
      return [];
    }

    return this.sizeObjectsWidthSortedAsc
      .filter((sizeObject) => sizeObject.name !== this.sizeObjectWidthAt!.name)
      .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'at'));
  }

  get attributesWidthFromRetired(): string[] {
    if (!this.sizeObjectsWidthTo) {
      return [];
    }

    return this.sizeObjectsWidthTo
      .slice(1)
      .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'from'));
  }

  get attributesWidthToRetired(): string[] {
    if (!this.sizeObjectsWidthFrom) {
      return [];
    }

    return this.sizeObjectsWidthFrom
      .slice(0, -1)
      .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'to'));
  }

  get attributesWidthRetired(): string[] {
    return [
      ...this.attributesWidthAtRetired,
      ...this.attributesWidthFromRetired,
      ...this.attributesWidthToRetired,
    ];
  }

  get attributesHeightAtRetired(): string[] {
    if (!this.sizeObjectsHeightSortedAsc || !this.sizeObjectHeightAt) {
      return [];
    }

    return this.sizeObjectsHeightSortedAsc
      .filter((sizeObject) => sizeObject.name !== this.sizeObjectHeightAt!.name)
      .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'at'));
  }

  get attributesHeightFromRetired(): string[] {
    if (!this.sizeObjectsHeightTo) {
      return [];
    }

    return this.sizeObjectsHeightTo
      .slice(1)
      .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'from'));
  }

  get attributesHeightToRetired(): string[] {
    if (!this.sizeObjectsHeightFrom) {
      return [];
    }

    return this.sizeObjectsHeightFrom
      .slice(0, -1)
      .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'to'));
  }

  get attributesHeightRetired(): string[] {
    return [
      ...this.attributesHeightAtRetired,
      ...this.attributesHeightFromRetired,
      ...this.attributesHeightToRetired,
    ];
  }

  get attributesRatioAtRetired(): string[] {
    if (!this.sizeObjectsRatioSortedAsc || !this.sizeObjectRatioAt) {
      return [];
    }

    return this.sizeObjectsRatioSortedAsc
      .filter((sizeObject) => sizeObject.name !== this.sizeObjectRatioAt!.name)
      .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'at'));
  }

  get attributesRatioFromRetired(): string[] {
    if (!this.sizeObjectsRatioTo) {
      return [];
    }

    return this.sizeObjectsRatioTo
      .slice(1)
      .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'from'));
  }

  get attributesRatioToRetired(): string[] {
    if (!this.sizeObjectsRatioFrom) {
      return [];
    }

    return this.sizeObjectsRatioFrom
      .slice(0, -1)
      .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'to'));
  }

  get attributesRatioRetired(): string[] {
    return [
      ...this.attributesRatioAtRetired,
      ...this.attributesRatioFromRetired,
      ...this.attributesRatioToRetired,
    ];
  }

  get attributesRetired(): string[] {
    return [
      ...this.attributesWidthRetired,
      ...this.attributesHeightRetired,
      ...this.attributesRatioRetired,
    ];
  }

  get yield(): EQInfo {
    if (!this._element) throw new Error('Expected this._element to be available');

    return {
      element: this._element,
      width: this.width,
      height: this.height,
      ratio: this.ratio,
      size: this.sizeObjectWidthAt?.name,
      sizeHeight: this.sizeObjectHeightAt?.name,
      sizeRatio: this.sizeObjectRatioAt?.name,
      prefix: this.named.prefix,
      attributes: this.attributes,
      attributesRecord: this.attributesRecord,
    };
  }

  // -------------------
  // Methods
  // -------------------

  convertSizeToAttribute(size: string, rangeDirection: RangeDirection): string {
    const prefix = this.named.prefix ?? '';

    if (typeof prefix !== 'string') {
      throw new Error(`element-query: expected prefix to be a string, was ${typeof prefix}`);
    }

    return `${prefix}${rangeDirection}-${size}`;
  }

  applyAttributesToElement(): void {
    this.attributes.forEach((attribute) => {
      if (!this._element) throw new Error('Expected this._element to be available');
      this._element.setAttribute(attribute, '');
    });

    this.attributesRetired.forEach((attribute) => {
      if (!this._element) throw new Error('Expected this._element to be available');
      this._element.removeAttribute(attribute);
    });

    if (!this._element) throw new Error('Expected this._element to be available');
    this._element.setAttribute('eq', '');
  }

  callOnResize(): void {
    if (this.named.onResize) {
      this.named.onResize(this.yield);
    }
  }

  buildSizeObjectsSortedAsc(sizes: Sizes): SizeObject[] {
    const result = Object.entries(sizes)
      .sort((a, b) => a[1] - b[1])
      .reduce((result, [name, value], index, sizesSorted) => {
        if (!Number.isFinite(value) || value < 0) {
          throw new Error(
            `element-query: Expected sizes to be positive numbers, ${name} was ${
              typeof value === 'string' ? `"${value}"` : `${value}` // eslint-disable-line
            }`
          );
        }

        if (index > 0 && value === sizesSorted[index - 1][1]) {
          throw new Error(
            `element-query: Sizes ${name} and ${
              sizesSorted[index - 1][0]
            } have identical value ${value}. All sizes must be unique`
          );
        }

        result.push({ name, value, index });
        return result;
      }, [] as SizeObject[]);

    if (result[0].value !== 0) throw new Error('element-query: One of the sizes must be `0`');

    return result;
  }

  findSizeObjectAt(sizeObjectsSortedAsc: SizeObject[], dimension: number): SizeObject {
    if (dimension < 0) throw new Error('Expected dimensions not to be negative');

    const nextIndex = sizeObjectsSortedAsc.findIndex((size) => size.value > dimension)!;

    if (nextIndex === 0) throw new Error('Expected next index not to be 0');

    return nextIndex > 0
      ? sizeObjectsSortedAsc[nextIndex - 1]
      : sizeObjectsSortedAsc[sizeObjectsSortedAsc.length - 1];
  }

  _didResizeHandlerSync(): void {
    if (!this.named.isDisabled && !this.isDestroying && !this.isDestroyed) {
      this.applyAttributesToElement();
      this.callOnResize();
    }
  }

  _didResizeHandlerRequestAnimationFrame(): void {
    window.requestAnimationFrame(() => {
      this._didResizeHandlerSync();
    });
  }

  // -------------------
  // Actions
  // -------------------

  @action didResizeHandler(): void {
    debounceTask(this, '_didResizeHandlerRequestAnimationFrame', this.debounce);
  }

  modify(element: HTMLElement, _pos: unknown[], named: Args): void {
    this._element = element;
    this.named = named;
    if (this._firstCall) {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      this.resizeObserver.observe(element, this.didResizeHandler);
      this._didResizeHandlerSync();

      registerDestructor(this, () => this.cleanup());
      this._firstCall = false;
    } else {
      if (this.resizeObserver.isEnabled) {
        this.didResizeHandler();
      }
    }
  }

  cleanup(): void {
    if (!this._element) throw new Error('Expected this._element to be available');

    this.resizeObserver.unobserve(this._element, this.didResizeHandler); // eslint-disable-line @typescript-eslint/unbound-method
  }
}
