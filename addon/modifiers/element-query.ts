import Modifier, { ModifierArgs } from 'ember-modifier';
import { observeResize } from 'ember-resize-observer-modifier/modifiers/observe-resize';
import { action } from '@ember/object';

interface Args extends ModifierArgs {
  positional: [];
  named: {
    onResize?: (params: Measurements) => void;
  };
}

interface Measurements {
  element: ElementStub;
  width: number;
  height: number;
  ratio: number;
}

type Sizes = Record<string, number>;

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

export type RangeDirection = 'at' | 'from' | 'to';

export default class ElementQueryModifier extends Modifier<Args> {
  // -------------------
  // Properties
  // -------------------

  // prettier-ignore
  sizes: Sizes = {
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
    if (!this._element) throw new Error('Expected this._element to be available');
    return this.width / this.height;
  }

  get sizeObjectsSortedAsc(): SizeObject[] {
    const result = Object.entries(this.sizes)
      .sort((a, b) => a[1] - b[1])
      .reduce((result, [name, value], index) => {
        result.push({ name, value, index });
        return result;
      }, [] as SizeObject[]);

    if (result[0].value !== 0) throw new Error('One of the element-query sizes must be `0`');

    return result;
  }

  get atSizeObject(): SizeObject {
    if (this.width < 0) throw new Error('Expected width not to be negative');

    const nextIndex = this.sizeObjectsSortedAsc.findIndex((size) => size.value > this.width)!;

    if (nextIndex === 0) throw new Error('Expected next index not to be 0');

    return nextIndex > 0
      ? this.sizeObjectsSortedAsc[nextIndex - 1]
      : this.sizeObjectsSortedAsc[this.sizeObjectsSortedAsc.length - 1];
  }

  get fromSizeObjects(): SizeObject[] {
    const nextIndex = this.atSizeObject.index + 1;
    return this.sizeObjectsSortedAsc.slice(0, nextIndex);
  }

  get toSizeObjects(): SizeObject[] {
    const index = this.atSizeObject.index;
    return this.sizeObjectsSortedAsc.slice(index);
  }

  get attributes(): string[] {
    return [
      this.convertSizeToAttribute(this.atSizeObject.name, 'at'),
      ...this.fromSizeObjects.map((fromSizeObject) =>
        this.convertSizeToAttribute(fromSizeObject.name, 'from')
      ),
      ...this.toSizeObjects.map((toSizeObject) =>
        this.convertSizeToAttribute(toSizeObject.name, 'to')
      ),
    ];
  }

  get attributesToRemove(): string[] {
    return [
      ...this.sizeObjectsSortedAsc
        .filter((sizeObject) => sizeObject.name !== this.atSizeObject.name)
        .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'at')),
      ...this.toSizeObjects
        .slice(1)
        .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'from')),
      ...this.fromSizeObjects
        .slice(0, -1)
        .map((sizeObject) => this.convertSizeToAttribute(sizeObject.name, 'to')),
    ];
  }

  // -------------------
  // Methods
  // -------------------

  convertSizeToAttribute(size: string, rangeDirection: RangeDirection): string {
    return `${rangeDirection}-${size}`;
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
      if (!this._element) throw new Error('Expected this._element to be available');

      this.args.named.onResize({
        element: this._element,
        width: this.width,
        height: this.height,
        ratio: this.ratio,
      });
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

    observeResize(this.element, [this.didResizeHandler]); // eslint-disable-line @typescript-eslint/unbound-method
  }

  willRemove(): void {}
}
