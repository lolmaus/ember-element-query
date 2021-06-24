import Component from '@glimmer/component';
import { CallbackArgs, Sizes, Dimension } from './modifier';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface ElementQueryArgs {
  dimension?: Dimension;
  isDisabled?: boolean;
  prefix?: string;
  sizes?: Sizes;
  sizesHeight?: Sizes | true;
  onResize?: (params: CallbackArgs) => void;
}
export default class ElementQuery extends Component<ElementQueryArgs> {
  @tracked
  params?: CallbackArgs;

  @action
  onResize(params: CallbackArgs): void {
    this.params = params;

    if (this.args.onResize) {
      this.args.onResize(params);
    }
  }
}
