import Modifier, { ModifierArgs } from 'ember-modifier';
import { observeResize } from 'ember-resize-observer-modifier/modifiers/observe-resize';
import { action } from '@ember/object';
import window from 'ember-window-mock';

interface Args extends ModifierArgs {
  positional: [];
  named: {
    onResize?: (params: Yield) => void;
    sizes?: Sizes;
    sizesHeight?: Sizes;
    prefix?: string;
    dimension?: Dimension;
    isDisabled?: boolean;
  };
}

export interface Yield {
  element: ElementStub;
  width: number;
  height: number;
  ratio: number;
  size: string;
  attributes: string[];
}

export type Sizes = Record<string, number>;

export interface SizeObject {
  name: string;
  value: number;
  index: number;
}

export interface ElementStub {
  clientWidth?: number;
  clientHeight?: number;
  setAttribute?: (qualifiedName: string, value: string) => void;
  removeAttribute?: (qualifiedName: string) => void;
}

export type Dimension = 'width' | 'height' | 'both';
export type RangeDirection = 'at' | 'from' | 'to';

// prettier-ignore
const SIZES_DEFAULT: Sizes = {
  xxs:  0,
  xs:   200,
  s:    400,
  m:    600,
  l:    800,
  xl:   1000,
  xxl:  1200,
  xxxl: 1400,
};

// prettier-ignore
const SIZES_HEIGHT_DEFAULT: Sizes = {
  'xxs-height':  0,
  'xs-height':   200,
  's-height':    400,
  'm-height':    600,
  'l-height':    800,
  'xl-height':   1000,
  'xxl-height':  1200,
  'xxxl-height': 1400,
};

export default class ElementQueryModifier extends Modifier<Args> {
  // -------------------
  // Properties
  // -------------------

  sizesDefault: Sizes = SIZES_DEFAULT;
  sizesHeightDefault: Sizes = SIZES_HEIGHT_DEFAULT;

  _element?: ElementStub; // For some reason, this.element is not always available
  teardownResizeObserver?: () => void;

  // -------------------
  // Computed properties
  // -------------------

  get width(): number {
    if (!this._element) throw new Error('Expected this._element to be available');
    return this._element.clientWidth!;
  }

  get height(): number {
    if (!this._element) throw new Error('Expected this._element to be available');
    return this._element.clientHeight!;
  }

  get ratio(): number {
    return this.width / this.height;
  }

  get sizes(): Sizes {
    return this.args.named.sizes || this.sizesDefault;
  }

  get isDimensionWidth(): boolean {
    return (
      !this.args.named.dimension ||
      this.args.named.dimension === 'width' ||
      this.args.named.dimension === 'both'
    );
  }

  get isDimensionHeight(): boolean {
    return this.args.named.dimension === 'height' || this.args.named.dimension === 'both';
  }

  get sizesHeight(): Sizes {
    return this.args.named.sizesHeight || this.sizesHeightDefault;
  }

  get sizeObjectsWidthSortedAsc(): SizeObject[] {
    return this.buildSizeObjectsSortedAsc(this.sizes);
  }

  get sizeObjectsHeightSortedAsc(): SizeObject[] {
    return this.buildSizeObjectsSortedAsc(this.sizesHeight);
  }

  get sizeObjectWidthAt(): SizeObject {
    return this.findSizeObjectAt(this.sizeObjectsWidthSortedAsc, this.width);
  }

  get sizeObjectHeightAt(): SizeObject {
    return this.findSizeObjectAt(this.sizeObjectsHeightSortedAsc, this.height);
  }

  get sizeObjectsWidthFrom(): SizeObject[] {
    const nextIndex = this.sizeObjectWidthAt.index + 1;
    return this.sizeObjectsWidthSortedAsc.slice(0, nextIndex);
  }

  get sizeObjectsHeightFrom(): SizeObject[] {
    const nextIndex = this.sizeObjectHeightAt.index + 1;
    return this.sizeObjectsHeightSortedAsc.slice(0, nextIndex);
  }

  get sizeObjectsWidthTo(): SizeObject[] {
    const index = this.sizeObjectWidthAt.index;
    return this.sizeObjectsWidthSortedAsc.slice(index);
  }

  get sizeObjectsHeightTo(): SizeObject[] {
    const index = this.sizeObjectHeightAt.index;
    return this.sizeObjectsHeightSortedAsc.slice(index);
  }

  get attributesWidth(): string[] {
    return [
      this.convertSizeToAttribute(this.sizeObjectWidthAt.name, 'at'),
      ...this.sizeObjectsWidthFrom.map((fromSizeObject) =>
        this.convertSizeToAttribute(fromSizeObject.name, 'from')
      ),
      ...this.sizeObjectsWidthTo.map((toSizeObject) =>
        this.convertSizeToAttribute(toSizeObject.name, 'to')
      ),
    ];
  }

  get attributesHeight(): string[] {
    return [
      this.convertSizeToAttribute(this.sizeObjectHeightAt.name, 'at'),
      ...this.sizeObjectsHeightFrom.map((fromSizeObject) =>
        this.convertSizeToAttribute(fromSizeObject.name, 'from')
      ),
      ...this.sizeObjectsHeightTo.map((toSizeObject) =>
        this.convertSizeToAttribute(toSizeObject.name, 'to')
      ),
    ];
  }

  get attributesWidthToRemove(): string[] {
    return [
      ...this.sizeObjectsWidthSortedAsc
        .filter((sizeObject) => sizeObject.name !== this.sizeObjectWidthAt.name)
        .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'at')),
      ...this.sizeObjectsWidthTo
        .slice(1)
        .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'from')),
      ...this.sizeObjectsWidthFrom
        .slice(0, -1)
        .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'to')),
    ];
  }

  get attributesHeightToRemove(): string[] {
    return [
      ...this.sizeObjectsHeightSortedAsc
        .filter((sizeObject) => sizeObject.name !== this.sizeObjectHeightAt.name)
        .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'at')),
      ...this.sizeObjectsHeightTo
        .slice(1)
        .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'from')),
      ...this.sizeObjectsHeightFrom
        .slice(0, -1)
        .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'to')),
    ];
  }

  get attributes(): string[] {
    return [
      ...(this.isDimensionWidth ? this.attributesWidth : []),
      ...(this.isDimensionHeight ? this.attributesHeight : []),
    ];
  }

  get attributesToRemove(): string[] {
    return [
      ...(this.isDimensionWidth ? this.attributesWidthToRemove : []),
      ...(this.isDimensionHeight ? this.attributesHeightToRemove : []),
    ];
  }

  get yield(): Yield {
    if (!this._element) throw new Error('Expected this._element to be available');

    return {
      element: this._element,
      width: this.width,
      height: this.height,
      ratio: this.ratio,
      size: this.sizeObjectWidthAt.name,
      attributes: this.attributes,
    };
  }

  // -------------------
  // Methods
  // -------------------

  convertSizeToAttribute(size: string, rangeDirection: RangeDirection): string {
    const prefix = this.args.named.prefix ?? '';

    if (typeof prefix !== 'string') {
      throw new Error(`element-query: expected prefix to be a string, was ${typeof prefix}`);
    }

    return `${prefix}${rangeDirection}-${size}`;
  }

  applyAttributesToElement(): void {
    this.attributes.forEach((attribute) => {
      if (!this._element) throw new Error('Expected this._element to be available');
      this._element.setAttribute!(attribute, '');
    });

    this.attributesToRemove.forEach((attribute) => {
      if (!this._element) throw new Error('Expected this._element to be available');
      this._element.removeAttribute!(attribute);
    });
  }

  callOnResize(): void {
    if (this.args.named.onResize) {
      this.args.named.onResize(this.yield);
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

  // -------------------
  // Actions
  // -------------------

  @action didResizeHandler(): void {
    window.requestAnimationFrame(() => {
      if (!this.args.named.isDisabled && !this.isDestroying && !this.isDestroyed) {
        this.applyAttributesToElement();
        this.callOnResize();
      }
    });
  }

  // -------------------
  // Lifecycle hooks
  // -------------------

  didInstall(): void {
    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/28502#issuecomment-609607344
    if (!ResizeObserver) return;

    if (!this.element) throw new Error('Expected this.element to be available');

    this._element = this.element;

    this.teardownResizeObserver = observeResize(this.element, [this.didResizeHandler]); // eslint-disable-line @typescript-eslint/unbound-method
  }

  didUpdateArguments(): void {
    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/28502#issuecomment-609607344
    if (!ResizeObserver) return;

    this.didResizeHandler();
  }

  willRemove(): void {
    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/28502#issuecomment-609607344
    if (!ResizeObserver) return;

    if (this.teardownResizeObserver) this.teardownResizeObserver();
  }
}
