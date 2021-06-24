import { ModifierArgs as ModifierArgsBase } from 'ember-modifier';

export { default as component } from './-private/component';
export { default as modifier } from './-private/modifier';

export type Dimension = 'width' | 'height' | 'both';

export type Sizes = Record<string, number>;

export interface EQInfo {
  element: HTMLElement;
  width: number;
  height: number;
  ratio: number;
  size?: string;
  sizeHeight?: string;
  dimension: Dimension;
  prefix?: string;
  attributes: string[];
  attributesRecord: Record<string, true>;
}

export interface ModifierArgs extends ModifierArgsBase {
  positional: [];
  named: {
    onResize?: (eqInfo: EQInfo) => void;
    sizes?: Sizes;
    sizesHeight?: Sizes;
    prefix?: string;
    dimension?: Dimension;
    isDisabled?: boolean;
  };
}

export interface ComponentArgs {
  dimension?: Dimension;
  isDisabled?: boolean;
  prefix?: string;
  sizes?: Sizes;
  sizesHeight?: Sizes | true;
  onResize?: (eqInfo: EQInfo) => void;
}

// prettier-ignore
export const SIZES_DEFAULT: Sizes = {
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
export const SIZES_HEIGHT_DEFAULT: Sizes = {
  'xxs-height':  0,
  'xs-height':   200,
  's-height':    400,
  'm-height':    600,
  'l-height':    800,
  'xl-height':   1000,
  'xxl-height':  1200,
  'xxxl-height': 1400,
};
