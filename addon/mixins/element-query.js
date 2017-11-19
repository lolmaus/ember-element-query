// Contains code snippets borrowed from runspired/flexi, specifically
// https://github.com/runspired/flexi/blob/develop/addon/services/device/layout.js


import Mixin from '@ember/object/mixin'
import {on} from '@ember/object/evented'

import computed from 'ember-macro-helpers/computed'

import EventForwardingMixin from './event-forwarding'


export default Mixin.create(EventForwardingMixin, {

  // ----- Arguments -----
  eqSlices : {
    0    : 'xxs',
    200  : 'xs',
    400  : 's',
    600  : 'm',
    800  : 'l',
    1000 : 'xl',
    1200 : 'xxl',
    1400 : 'xxxl',
  },

  eqTransitionSelectors : null,



  // ----- Overridden properties -----



  // ----- Own Non-CP properties -----
  eqWidth  : null,
  eqHeight : null,



  // ----- Computed properties -----
  eqBreakpointsAsc : computed('eqSlices', {
    get (eqSlices) {
      return Object
        .keys(eqSlices)
        .map(bp => parseInt(bp, 10))
        .sort((a, b) => (a - b))
    }
  }),

  eqBreakpointsDesc : computed('eqBreakpointsAsc.[]', {
    get (eqBreakpointsAsc) {
      return eqBreakpointsAsc.slice().reverse()
    }
  }),

  eqBPCurrent : computed('eqBreakpointsDesc.[]', 'eqWidth', {
    get (eqBreakpointsDesc, eqWidth) {
      return eqWidth == null
        ? null
        : eqBreakpointsDesc.find(bp => bp <= eqWidth)
    }
  }),

  eqBPCurrentIndex : computed('eqBreakpointsAsc.[]', 'eqBPCurrent', {
    get (eqBreakpointsAsc, eqBPCurrent) {
      return eqBPCurrent == null
        ? null
        : eqBreakpointsAsc.indexOf(eqBPCurrent)
    }
  }),

  eqBPsFrom : computed('eqBreakpointsAsc.[]', 'eqBPCurrentIndex', {
    get (eqBreakpointsAsc, eqBPCurrentIndex) {
      return eqBPCurrentIndex == null
        ? null
        : eqBreakpointsAsc.slice(0, eqBPCurrentIndex + 1)
    }
  }),

  eqBPsTo : computed('eqBreakpointsAsc.[]', 'eqBPCurrentIndex', {
    get (eqBreakpointsAsc, eqBPCurrentIndex) {
      return eqBPCurrentIndex == null
        ? null
        : eqBreakpointsAsc.slice(eqBPCurrentIndex)
    }
  }),

  eqBPsBetween : computed('eqBreakpointsAsc.[]', 'eqBPCurrentIndex', {
    get (eqBreakpointsAsc, eqBPCurrentIndex) {
      if (eqBPCurrentIndex == null) return null

      const result = []

      eqBreakpointsAsc
        .slice(0, eqBPCurrentIndex + 1)
        .forEach(bp1 => {
          eqBreakpointsAsc
            .slice(eqBPCurrentIndex)
            .forEach(bp2 => {
              result.push([ bp1, bp2 ])
            })
        })

      return result
    }
  }),

  eqSliceCurrent : computed('eqSlices', 'eqBPCurrent', {
    get (eqSlices, eqBPCurrent) {
      return this.eqSliceForBP(eqBPCurrent)
    }
  }),

  eqSlicesFrom : computed('eqSlices', 'eqBPsFrom.[]', {
    get (eqSlices, eqBPsFrom) {
      return eqBPsFrom == null
        ? null
        : this.eqSlicesForBPs(eqBPsFrom)
    }
  }),

  eqSlicesTo : computed('eqSlices', 'eqBPsTo.[]', {
    get (eqSlices, eqBPsTo) {
      return eqBPsTo == null
        ? null
        : this.eqSlicesForBPs(eqBPsTo)
    }
  }),

  eqSlicesBetween : computed('eqSlices', 'eqBPsBetween.[]', {
    get (eqSlices, eqBPsBetween) {
      if (eqBPsBetween == null)  return null

      return eqBPsBetween
        .map(([ bp1, bp2 ]) => {
          const slice1 = this.eqSliceForBP(bp1)
          const slice2 = this.eqSliceForBP(bp2)

          return `${slice1}-${slice2}`
        })
    }
  }),

  eqSlicesFromAttr : computed('eqSlicesFrom', {
    get (eqSlicesFrom) {
      return (eqSlicesFrom || []).join(' ')
    }
  }),

  eqSlicesToAttr : computed('eqSlicesTo', {
    get (eqSlicesTo) {
      return (eqSlicesTo || []).join(' ')
    }
  }),

  eqSlicesBetweenAttr : computed('eqSlicesBetween', {
    get (eqSlicesBetween) {
      return (eqSlicesBetween || []).join(' ')
    }
  }),

  eqTransitionEventName : computed(() => {
    const el = document.createElement('fakeelement')
    const transitions = {
      'transition'       : 'transitionend',
      'OTransition'      : 'oTransitionEnd',
      'MozTransition'    : 'transitionend',
      'WebkitTransition' : 'webkitTransitionEnd'
    }

    const transitionKey =
      Object
        .keys(transitions)
        .find(t => el.style[t] !== undefined)

    return transitions[transitionKey]
  }),

  eqYieldable : computed(
    'eqBPCurrent',
    'eqBPCurrentIndex',
    'eqBPsBetween',
    'eqBPsFrom',
    'eqBPsTo',
    'eqBreakpointsAsc',
    'eqBreakpointsDesc',
    'eqSliceCurrent',
    'eqSlices',
    'eqSlicesFrom',
    'eqSlicesTo',
    'eqWidth',
    'eqHeight',
    function () {
      return this.getProperties(
        'eqBPCurrent',
        'eqBPCurrentIndex',
        'eqBPsBetween',
        'eqBPsFrom',
        'eqBPsTo',
        'eqBreakpointsAsc',
        'eqBreakpointsDesc',
        'eqSliceCurrent',
        'eqSlices',
        'eqSlicesFrom',
        'eqSlicesTo',
        'eqWidth',
        'eqHeight'
      )
    }
  ),



  // ----- Private computed properties -----
  _eqTrigger : computed(function () {
    return () => this.eqHandleResize()
  }),



  // ----- Public Methods -----
  eqSliceForBP (bp) {
    return this.get('eqSlices')[bp]
  },

  eqSlicesForBPs (bps) {
    return bps.map(bp => this.eqSliceForBP(bp))
  },

  eqUpdateSizes () {
    const element = this.get('element')

    if (!element || this.get('isDestroying') || this.get('isDestroyed')) return

    this.set('eqWidth',  element.offsetWidth)
    this.set('eqHeight', element.offsetHeight)

    return {
      width  : element.offsetWidth,
      height : element.offsetHeight
    }
  },

  // ----- Private methods -----
  _eqSetupTransitions () {
    const eqTransitionEventName = this.get('eqTransitionEventName')
    const eqTransitionSelectors = this.get('eqTransitionSelectors')

    if (
      !eqTransitionEventName
      || !eqTransitionSelectors
      || !eqTransitionSelectors.length
    ) {
      return
    }

    const eqTrigger = this.get('_eqTrigger')

    eqTransitionSelectors
      .forEach(className => {
        this
          .$(className)[0]
          .addEventListener(eqTransitionEventName, eqTrigger)
      })
  },

  _eqTeardownTransitions () {
    const eqTransitionEventName = this.get('eqTransitionEventName')
    const eqTransitionSelectors = this.get('eqTransitionSelectors')

    if (
      !eqTransitionEventName
      || !eqTransitionSelectors
      || !eqTransitionSelectors.length
    ) {
      return
    }

    const eqTrigger = this.get('_eqTrigger')

    eqTransitionSelectors
      .forEach(className => {
        this
          .$(className)[0]
          .removeEventListener(eqTransitionEventName, eqTrigger)
      })
  },



  // ----- Overridden methods -----
  eqHandleResize () {
    this.eqUpdateSizes()
    this._super()
  },

  didReceiveAttrs () {
    this._super(...arguments)

    if (!this.get('eqEnabled')) return

    this.set('attributeBindings', [
      'eqSliceCurrent:data-eq-current',
      'eqSlicesFromAttr:data-eq-from',
      'eqSlicesToAttr:data-eq-to',
      'eqSlicesBetweenAttr:data-eq-between',
    ])
  },

  didInsertParent () {
    this._super(...arguments)

    if (!this.get('eqEnabled')) return

    this._eqSetupTransitions()
  },

  willDestroyParent () {
    this._super(...arguments)

    if (!this.get('eqEnabled')) return

    this._eqTeardownTransitions()
  },



  // ----- Events -----
  _eqHandleDidRender : on('didRender', function () {
    this.eqHandleResize()
  }),
})
