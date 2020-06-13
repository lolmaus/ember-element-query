import Modifier, { ModifierArgs } from 'ember-modifier';
import { observeResize } from 'ember-resize-observer-modifier/modifiers/observe-resize';
import { action } from '@ember/object';

interface Args extends ModifierArgs {
  positional: [];
  named: {
    onResize?: (params: CallbackArgs) => void;
  };
}

interface CallbackArgs {
  element: ElementStub;
  width: number;
  height: number;
  ratio: number;
}

type Sizes = Record<string, number>;

export interface Size {
  name: string;
  value: number;
  index: number;
}

export interface ElementStub {
  clientWidth: number;
  clientHeight: number;
}

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

  get callbackArgs(): CallbackArgs {
    if (!this._element) throw new Error('Expected this.element to be available');

    return {
      element: this._element,
      width: this._element.clientWidth,
      height: this._element.clientHeight,
      ratio: this._element.clientWidth / this._element.clientHeight,
    };
  }

  get sizesSortedAsc(): Size[] {
    const result = Object.entries(this.sizes)
      .sort((a, b) => a[1] - b[1])
      .reduce((result, [name, value], index) => {
        result.push({ name, value, index });
        return result;
      }, [] as Size[]);

    if (result[0].value !== 0) throw new Error('One of the element-query sizes must be `0`');

    return result;
  }

  get currentSize(): Size {
    if (this.callbackArgs.width < 0) throw new Error('Expected width not to be negative');

    const nextIndex = this.sizesSortedAsc.findIndex(
      (size) => size.value > this.callbackArgs.width
    )!;

    if (nextIndex === 0) throw new Error('Expected next index not to be 0');

    return nextIndex > 0
      ? this.sizesSortedAsc[nextIndex - 1]
      : this.sizesSortedAsc[this.sizesSortedAsc.length - 1];
  }

  get atAttribute(): string {
    const sizeName = this.currentSize.name;
    return `at-${sizeName}`;
  }

  // get attributes(): string[] {
  //   // prettier-ignore
  //   return [
  //     this.atAttribute,
  //     ...this.fromAttributes,
  //     ...this.toAttributes,
  //   ];
  // }

  // -------------------
  // Methods
  // -------------------

  // -------------------
  // Actions
  // -------------------

  @action didResizeHandler(): void {
    if (this.args.named.onResize) {
      this.args.named.onResize(this.callbackArgs);
    }
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
