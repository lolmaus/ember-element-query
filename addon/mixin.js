// Contains code snippets borrowed from runspired/flexi, specifically
// https://github.com/runspired/flexi/blob/develop/addon/services/device/layout.js

import Ember from 'ember';

const {
  computed,
  Mixin,
  on,
  run: {next, scheduleOnce}
} = Ember;

import eqTrigger from 'ember-element-query/trigger';

/**
 *
 * A component mixin that implements the element query functionality.
 *
 * The `e-q` component includes this mixin.
 *
 * @class EQMixin
 * @module ember-element-query
 * @extends Ember.Mixin
 * @example
 * import EQMixin from 'ember-element-query/mixin';
 * */

export default Mixin.create({

  // ----- Arguments -----

  /**
   * A hash mapping breakpoints (integers, in pixels) to slice names (strings).
   *
   * See [breakpoint-slicer#concept](https://github.com/lolmaus/breakpoint-slicer#concept)
   * for a detailed explanation on how slices work.
   *
   * The first breakpoint should always be zero.
   *
   * @property eqSlices
   * @type Object
   * @default
   * {
   *      0: 'xxs',
   *    200: 'xs',
   *    400: 's',
   *    600: 'm',
   *    800: 'l',
   *   1000: 'xl',
   *   1200: 'xxl',
   *   1400: 'xxxl',
   * }
   * @required
   */
  eqSlices: {
    0:    'xxs',
    200:  'xs',
    400:  's',
    600:  'm',
    800:  'l',
    1000: 'xl',
    1200: 'xxl',
    1400: 'xxxl',
  },

  /**
   * ember-element-query will trigger the `eq-update` event on the
   * transition end event of any child element whose HTML selector is listed
   * in this array.
   *
   * @property eqTransitionSelectors
   * @type {null|Array}
   * @optional
   *
   * */
  eqTransitionSelectors: null,



  // ----- Overridden properties -----
  attributeBindings: [
         'eqSliceCurrent:data-eq-current',
       'eqSlicesFromAttr:data-eq-from',
         'eqSlicesToAttr:data-eq-to',
    'eqSlicesBetweenAttr:data-eq-between',
  ],



  // ----- Own Non-CP properties -----

  /**
   * An integer referencing the current width in pixels of the component's
   * element.
   *
   * Initially is `null`. Gets updated by `_eqResizeHandler` on `resize` and
   * `eq-update` events.
   *
   * @property eqWidth
   * @type Number
   * @final
   */
  eqWidth: null,



  /**
   * A callback triggered by `resize` and `eq-update` events.
   *
   * Is initially null, is assigned to from `_setupEqResize`.
   *
   * @method _eqResizeHandler
   * @private
   */

  _eqResizeHandler: null,



  // ----- Computed properties -----

  /**
   * An array of breakpoints as defined in eqSlices, sorted in ascending order.
   *
   * @property eqBreakpointsAsc
   * @type Array
   * @computed
   * @final
   * */
  eqBreakpointsAsc: computed('eqSlices', {
    get() {
      const eqSlices = this.get('eqSlices');

      return Object
        .keys(eqSlices)
        .map(bp => parseInt(bp, 10))
        .sort((a, b) => (a - b));
    }
  }),

  /**
   * An array of breakpoints as defined in eqSlices, sorted in descending order.
   *
   * @property eqBreakpointsDesc
   * @type Array
   * @computed
   * @final
   * */
  eqBreakpointsDesc: computed('eqBreakpointsAsc.[]', function () {
    return this
      .get('eqBreakpointsAsc')
      .slice()
      .reverse();
  }),

  /**
   * Current breakpoint, the closest one smaller or equal to current
   * element width.
   *
   * @property eqBPCurrent
   * @type Number
   * @computed
   * @final
   * */
  eqBPCurrent: computed('eqBreakpointsDesc.[]', 'eqWidth', function () {
    const eqWidth = this.get('eqWidth');

    if (eqWidth == null) {
      return null;
    }

    return this
      .get('eqBreakpointsDesc')
      .find(bp => bp <= eqWidth);
  }),

  /**
   * The zero index of the current breakpoint in the ascending list of
   * breakpoints, as defined in `eqSlices`.
   *
   * @property eqBPCurrentIndex
   * @type Number
   * @computed
   * @final
   * */
  eqBPCurrentIndex: computed('eqBreakpointsAsc.[]', 'eqBPCurrent', function () {
    const eqBPCurrent      = this.get('eqBPCurrent');

    if (eqBPCurrent == null) {
      return null;
    }

    const eqBreakpointsAsc = this.get('eqBreakpointsAsc');
    return eqBreakpointsAsc.indexOf(eqBPCurrent);
  }),

  /**
   * Array of breakpoints smaller than or equal to current.
   *
   * @property eqBPsFrom
   * @type Array
   * @computed
   * @final
   * */
  eqBPsFrom: computed(
    'eqBreakpointsAsc.[]',
    'eqBPCurrentIndex',
    function () {
      const eqBPCurrentIndex = this.get('eqBPCurrentIndex');

      if (eqBPCurrentIndex == null) {
        return null;
      }

      const eqBreakpointsAsc = this.get('eqBreakpointsAsc');

      return eqBreakpointsAsc
        .slice(0, eqBPCurrentIndex + 1);
    }
  ),

  /**
   * Array of breakpoints larger than or equal to current.
   *
   * @property eqBPsTo
   * @type Array
   * @computed
   * @final
   * */
  eqBPsTo: computed(
    'eqBreakpointsAsc.[]',
    'eqBPCurrentIndex',
    function () {
      const eqBPCurrentIndex = this.get('eqBPCurrentIndex');

      if (eqBPCurrentIndex == null) {
        return null;
      }

      const eqBreakpointsAsc = this.get('eqBreakpointsAsc');

      return eqBreakpointsAsc
        .slice(eqBPCurrentIndex);
    }
  ),

  /**
   * Array of arrays of all possible breakpoint pairs that represent slice
   * ranges that include current slice.
   *
   * For example, if current breakpoint is `400`, `eqBPsBetween` will include
   * `[200, 400]` and `[0, 1000]` (not only), but will not include `[0, 200`] or
   * `[600, 1000]`.
   *
   * @property eqBPsBetween
   * @type Array
   * @computed
   * @final
   * */
  eqBPsBetween: computed(
    'eqBreakpointsAsc.[]',
    'eqBPCurrentIndex',
    function () {
      const eqBPCurrentIndex = this.get('eqBPCurrentIndex');

      if (eqBPCurrentIndex == null) {
        return null;
      }

      const eqBreakpointsAsc = this.get('eqBreakpointsAsc');

      const result = [];

      eqBreakpointsAsc
        .slice(0, eqBPCurrentIndex + 1)
        .forEach(bp1 => {
          eqBreakpointsAsc
            .slice(eqBPCurrentIndex)
            .forEach(bp2 => {
              if(bp1 === bp2) {
                return;
              }
              result.push([bp1, bp2]);
            });
        });

      return result;
    }
  ),

  /**
   * Current slice name.
   *
   * @property eqSliceCurrent
   * @type String
   * @computed
   * @final
   * */
  eqSliceCurrent: computed('eqSlices', 'eqBPCurrent', function () {
    const eqBPCurrent = this.get('eqBPCurrent');
    return this.eqSliceForBP(eqBPCurrent);
  }),

  /**
   * Array of slice names smaller than or equal to current slice.
   *
   * @property eqSlicesFrom
   * @type Array
   * @computed
   * @final
   * */
  eqSlicesFrom: computed('eqSlices', 'eqBPsFrom.[]', function () {
    const eqBPsFrom = this.get('eqBPsFrom');

    if (eqBPsFrom == null) {
      return null;
    }

    return this.eqSlicesForBPs(eqBPsFrom);
  }),

  /**
   * Array of slice names larger than or equal to current slice.
   *
   * @property eqSlicesTo
   * @type Array
   * @computed
   * @final
   * */
  eqSlicesTo: computed('eqSlices', 'eqBPsTo.[]', function () {
    const eqBPsTo = this.get('eqBPsTo');

    if (eqBPsTo == null) {
      return null;
    }
    return this.eqSlicesForBPs(eqBPsTo);
  }),

  /**
   * Array of all possible slice name pairs that represent slice
   * ranges that include current slice.
   *
   * For example, if current slice is `s`, `eqSlicesBetween` will include
   * `'s-m'` and `'xxs-xl'` (not only), but will not include
   * `'xxs-xs'] or `'m-xl'`.
   *
   * @property eqSlicesTo
   * @type Array
   * @computed
   * @final
   * */
  eqSlicesBetween: computed('eqSlices', 'eqBPsBetween.[]', function () {
    const eqBPsBetween = this.get('eqBPsBetween');

    if (eqBPsBetween == null) {
      return null;
    }

    return eqBPsBetween
      .map(([bp1, bp2]) => {
        const slice1 = this.eqSliceForBP(bp1);
        const slice2 = this.eqSliceForBP(bp2);

        return `${slice1}-${slice2}`;
      });
  }),

  /**
   * Same as `eqSlicesFrom`, but in a form of space-delimited string.
   *
   * @property eqSlicesFromAttr
   * @type String
   * @computed
   * @final
   * */
  eqSlicesFromAttr: computed('eqSlicesFrom', function () {
    return (this.get('eqSlicesFrom') || []).join(' ');
  }),

  /**
   * Same as `eqSlicesToAttr`, but in a form of space-delimited string.
   *
   * @property eqSlicesToAttr
   * @type String
   * @computed
   * @final
   * */
  eqSlicesToAttr: computed('eqSlicesTo', function () {
    return (this.get('eqSlicesTo') || []).join(' ');
  }),

  /**
   * Same as `eqSlicesBetweenAttr`, but in a form of space-delimited string.
   *
   * @property eqSlicesBetweenAttr
   * @type String
   * @computed
   * @final
   * */
  eqSlicesBetweenAttr: computed('eqSlicesBetween', function () {
    return (this.get('eqSlicesBetween') || []).join(' ');
  }),

  /**
   * Vendor-prefixed name for the transition end event
   *
   * @property eqTransitionEventName
   * @type {String}
   * @computed
   * @final
   * */
  eqTransitionEventName: computed(function (){
    const el = document.createElement('fakeelement');
    const transitions = {
      'transition':       'transitionend',
      'OTransition':      'oTransitionEnd',
      'MozTransition':    'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };

    const transitionKey =
      Object
        .keys(transitions)
        .find(t => el.style[t] !== undefined);

    return transitions[transitionKey];
  }),



  // ----- Methods -----

  /**
   * Returns slice name for given breakpoint
   *
   * @method eqSliceForBP
   * @param {Number} bp Breakpoint
   * @returns {String} Slice name
   * */
  eqSliceForBP (bp) {
    return this.get('eqSlices')[bp];
  },

  /**
   * Maps an array of breakpoints to slice names.
   *
   * @method eqSlicesForBPs
   * @param bps {Array} Breakpoints
   * @returns {Array} Slice names
   * */
  eqSlicesForBPs (bps) {
    return bps
      .map(bp => this.eqSliceForBP(bp));
  },

  /**
   * Sets `eqWidth` to current element width.
   *
   * @method updateEqWidth
   * @returns {Number} Current element width
   * */
  updateEqWidth() {
    const element = this.get('element');

    if (!element) {
      return;
    }

    this.set('eqWidth', element.offsetWidth);
  },



  // ----- Events -----

  /**
   * On `didInsertElement`, define `_eqResizeHandler` and have it called on
   * `resize` and `eq-update` events.
   *
   * @method _eqSetupResizeHandler
   * @on
   * @private
   * */
  _eqSetupResizeHandler: on('didInsertElement', function () {
    const _eqResizeHandler = () => {
      scheduleOnce('afterRender', this, this.updateEqWidth);
      next(this, this.updateEqWidth);
    };

    this.setProperties({_eqResizeHandler});
    window.addEventListener('resize',    _eqResizeHandler, true);
    window.addEventListener('eq-update', _eqResizeHandler, true);
  }),

  /**
   * On `didRender`, call `_eqResizeHandler`.
   *
   * @method _eqSetupResizeHandler
   * @on
   * @private
   * */
  _eqHandleDidRender: on('didRender', function () {
    this.get('_eqResizeHandler')();
  }),

  /**
   * On `willDestroyElement`, remove `_eqResizeHandler` from listening to
   * `resize` and `eq-update` events.
   *
   * @method _eqSetupResizeHandler
   * @on
   * @private
   * */
  _eqTeardownEqResizeHandler: on('willDestroyElement', function () {
    const _eqResizeHandler = this.get('_eqResizeHandler');
    window.removeEventListener('resize',    _eqResizeHandler, true);
    window.removeEventListener('eq-update', _eqResizeHandler, true);
  }),

  /**
   * On `didInsertElement`, set up the `eq-update` event to trigger on
   * transition end of child elements whose selectors have been defined
   * in `eqTransitionEventName`.
   *
   * @method _eqSetupTransitions
   * @on
   * @private
   * */
  _eqSetupTransitions: on('didInsertElement', function () {
    const eqTransitionEventName = this.get('eqTransitionEventName');
    const eqTransitionSelectors = this.get('eqTransitionEventName');

    if (
      !eqTransitionEventName
      || !eqTransitionSelectors
      || !eqTransitionSelectors.length
    ) {
      return;
    }

    eqTransitionSelectors
      .forEach(className => {
        this
          .$(className)[0]
          .addEventListener(eqTransitionEventName, eqTrigger);
      });
  }),


  /**
   * On `willDestroyElement`, remove `_eqResizeHandler` from listening to
   * `resize` and `eq-update` events.
   *
   * @method _eqSetupTransitions
   * @on
   * @private
   * */
  _eqTeardownTransitions: on('willDestroyElement', function () {
    const eqTransitionEventName = this.get('eqTransitionEventName');
    const eqTransitionSelectors   = this.get('eqTransitionSelectors');

    if (
      !eqTransitionEventName
      || !eqTransitionSelectors
      || !eqTransitionSelectors.length
    ) {
      return;
    }

    eqTransitionSelectors
      .forEach(className => {
        this
          .$(className)[0]
          .removeEventListener(eqTransitionEventName, eqTrigger);
      });
  }),

});
