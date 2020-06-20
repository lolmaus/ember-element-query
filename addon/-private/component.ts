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

type BlankTemplate = 'element-query-blank-template';
const BLANK_TEMPLATE: BlankTemplate = 'element-query-blank-template';

interface Gates {
  [attr: string]: BlankTemplate;
}

export default class ElementQuery extends Component<ElementQueryArgs> {
  @tracked
  params?: CallbackArgs;

  get gates(): Gates | undefined {
    return this.params?.attributes.reduce((result, attribute) => {
      const prefix = this.params?.prefix || '';
      const attributeEffective = attribute.slice(prefix.length);

      result[attributeEffective] = BLANK_TEMPLATE;

      return result;
    }, {} as Gates);
  }

  @action
  onResize(params: CallbackArgs): void {
    this.params = params;

    if (this.args.onResize) {
      this.args.onResize(params);
    }
  }
}
