import { ModifierArgs as ModifierArgsBase } from 'ember-modifier';

export { default as component } from './-private/component';
export { default as modifier } from './-private/modifier';

/**
 * Defines the direction for which HTML attributes are applied.
 */
export type Dimension = 'width' | 'height' | 'both';

/**
 * A format for defining sizes. Keys are size names and values are left breakpoints of each size.
 *
 * The first size *must* have a value of `0`.
 */
export type Sizes = Record<string, number>;

/**
 * A data structure passed as an argument to callbacks.
 */
export interface EQInfo {
  /** An element to which Element Query has been applied. */
  element: HTMLElement;

  /** Current width of the element, in px. */
  width: number;

  /** Current height of the element, in px. */
  height: number;

  /** Current ratio of the element's width to height. */
  ratio: number;

  /** Name of the current horizontal [[Sizes | size]] of the element. */
  size?: string;

  /** Name of the current vertical [[Sizes | size]] of the element. */
  sizeHeight?: string;

  /** Name of the current [[dimension]] (horizontal/vertical/both). */
  dimension: Dimension;

  /** Prefix used for HTML attributes. */
  prefix?: string;

  /** Array of HTML attribute names which are currently applied. */
  attributes: string[];

  /**
   * Array of HTML attribute names which are currently applied where keys are attributes and values are all `true`.
   *
   * Mostly useful in templates.
   * */
  attributesRecord: Record<string, true>;
}

export interface ModifierArgs extends ModifierArgsBase {
  positional: [];
  named: Args;
}

/**
 * API of the `eq` modifier and the `EQ` component.
 */
export interface Args extends Record<string, unknown> {
  /** Callback that will be called when the size of the element changes. It is not throttled. Accepts [[EQInfo]] as the first argument. */
  onResize?: (eqInfo: EQInfo) => void;

  /** A definition of horizontal [Sizes]. Defaults to [[SIZES_DEFAULT]]. */
  sizes?: Sizes;

  /** A definition of vertical [Sizes]. Defaults to [[SIZES_HEIGHT_DEFAULT]]. */
  sizesHeight?: Sizes;

  /** Prefix to be used for HTML attributes. Defautls to `""`. */
  prefix?: string;

  /** Direction of measuring the element. */
  dimension?: Dimension;

  /** Use this to shut down the element query functionality for this element. */
  isDisabled?: boolean;
}

/**
 * Default value of horizontal [[Sizes]].
 */
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

/**
 * Default value of vertical [[Sizes]].
 */
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
