import Modifier, { ModifierArgs } from 'ember-modifier';
import { observeResize } from 'ember-resize-observer-modifier/modifiers/observe-resize';
import { action } from '@ember/object';

interface Args extends ModifierArgs {
  positional: [];
  named: {
    onResize?: (params: Yield) => void;
    sizes?: Sizes;
    prefix?: string;
    dimension?: Dimension;
  };
}

interface Yield {
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

export type Dimension = 'width' | 'height';
export type RangeDirection = 'at' | 'from' | 'to';

export default class ElementQueryModifier extends Modifier<Args> {
  // -------------------
  // Properties
  // -------------------

  // prettier-ignore
  sizesDefault: Sizes = {
    xxs:  0,
    xs:   200,
    s:    400,
    m:    600,
    l:    800,
    xl:   1000,
    xxl:  1200,
    xxxl: 1400,
  };

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

  get dimension(): number {
    if (
      this.args.named.dimension &&
      this.args.named.dimension !== 'width' &&
      this.args.named.dimension !== 'height'
    ) {
      throw new Error(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `element-query: Expected dimension to be 'width' or 'height', was ${this.args.named.dimension}`
      );
    }

    return this.args.named.dimension === 'height' ? this.height : this.width;
  }

  get ratio(): number {
    return this.width / this.height;
  }

  get sizes(): Sizes {
    return this.args.named.sizes || this.sizesDefault;
  }

  get sizeObjectsSortedAsc(): SizeObject[] {
    const result = Object.entries(this.sizes)
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

  get sizeObjectAt(): SizeObject {
    if (this.dimension < 0) throw new Error('Expected dimensions not to be negative');

    const nextIndex = this.sizeObjectsSortedAsc.findIndex((size) => size.value > this.dimension)!;

    if (nextIndex === 0) throw new Error('Expected next index not to be 0');

    return nextIndex > 0
      ? this.sizeObjectsSortedAsc[nextIndex - 1]
      : this.sizeObjectsSortedAsc[this.sizeObjectsSortedAsc.length - 1];
  }

  get sizeObjectsFrom(): SizeObject[] {
    const nextIndex = this.sizeObjectAt.index + 1;
    return this.sizeObjectsSortedAsc.slice(0, nextIndex);
  }

  get sizeObjectsTo(): SizeObject[] {
    const index = this.sizeObjectAt.index;
    return this.sizeObjectsSortedAsc.slice(index);
  }

  get attributes(): string[] {
    return [
      this.convertSizeToAttribute(this.sizeObjectAt.name, 'at'),
      ...this.sizeObjectsFrom.map((fromSizeObject) =>
        this.convertSizeToAttribute(fromSizeObject.name, 'from')
      ),
      ...this.sizeObjectsTo.map((toSizeObject) =>
        this.convertSizeToAttribute(toSizeObject.name, 'to')
      ),
    ];
  }

  get attributesToRemove(): string[] {
    return [
      ...this.sizeObjectsSortedAsc
        .filter((sizeObject) => sizeObject.name !== this.sizeObjectAt.name)
        .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'at')),
      ...this.sizeObjectsTo
        .slice(1)
        .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'from')),
      ...this.sizeObjectsFrom
        .slice(0, -1)
        .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'to')),
    ];
  }

  get yield(): Yield {
    if (!this._element) throw new Error('Expected this._element to be available');

    return {
      element: this._element,
      width: this.width,
      height: this.height,
      ratio: this.ratio,
      size: this.sizeObjectAt.name,
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

  // -------------------
  // Actions
  // -------------------

  @action didResizeHandler(): void {
    this.applyAttributesToElement();
    this.callOnResize();
  }

  // -------------------
  // Lifecycle hooks
  // -------------------

  didInstall(): void {
    if (!this.element) throw new Error('Expected this.element to be available');

    this._element = this.element;

    this.teardownResizeObserver = observeResize(this.element, [this.didResizeHandler]); // eslint-disable-line @typescript-eslint/unbound-method
  }

  didUpdateArguments(): void {
    this.didResizeHandler();
  }

  willRemove(): void {
    if (this.teardownResizeObserver) this.teardownResizeObserver();
  }
}
