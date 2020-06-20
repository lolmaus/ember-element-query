import Component from '@glimmer/component';
import { Yield, Sizes, Dimension } from './modifier';

interface ElementQueryArgs {
  dimension?: Dimension;
  isDisabled?: boolean;
  prefix?: string;
  sizes?: Sizes;
  sizesHeight?: Sizes | true;
  onResize?: (params: Yield) => void;
}

export default class ElementQuery extends Component<ElementQueryArgs> {}
