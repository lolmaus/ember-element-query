// Contains code snippets borrowed from runspired/flexi, specifically
// https://github.com/runspired/flexi/blob/develop/addon/services/device/layout.js



import {A, isArray} from '@ember/array'
import {on} from '@ember/object/evented'
import Mixin from '@ember/object/mixin'
import {inject as service} from '@ember/service'
import {isBlank} from '@ember/utils'

import computed from 'ember-macro-helpers/computed'

import EventForwardingMixin from './event-forwarding'


const YIELDABLE_PROPS = [
  'eqBPsFrom',
  'eqBPsTo',
  'eqBPsFromActive',
  'eqBPsToActive',
  'eqWidth',
  'eqHeight',
]



export default Mixin.create(EventForwardingMixin, {

  // ----- Arguments -----
  eqShouldUpdateHeight  : false,
  eqTransitionSelectors : null,



  // ----- Services -----
  eq : service(),



  // ----- Overridden properties -----



  // ----- Own Non-CP properties -----
  eqWidth  : null,
  eqHeight : null,



  // ----- Computed properties -----e
  eqClassNames : computed('class', 'classNames.[]', (classString = "", classNames = []) => {
    if (!isArray(classNames)) classNames = [classNames]

    const result =
      classString
        .split(' ')
        .concat(classNames)
        .filter(substr => !isBlank(substr))
        .map(substr => substr.trim())

    return A(result).uniq()
  }).readOnly(),

  eqBPsFrom : computed('eqClassNames.[]', 'eq.mapping', (classNames, mapping) => {
    return classNames.reduce((result, className) => {
      const classMapping = mapping[className]

      if (classMapping && classMapping.from) result.addObjects(classMapping.from)

      return result
    }, A())
  }).readOnly(),

  eqBPsTo : computed('eqClassNames.[]', 'eq.mapping', (classNames, mapping) => {
    return classNames.reduce((result, className) => {
      const classMapping = mapping[className]

      if (classMapping && classMapping.to) result.addObjects(classMapping.to)

      return result
    }, A())
  }).readOnly(),

  eqBPsFromActive : computed('eqWidth', 'eqBPsFrom.[]', (width, bpsFrom) => {
    return bpsFrom
      .filter(bp => bp <= width)
      .sort()
  }).readOnly(),

  eqBPsToActive : computed('eqWidth', 'eqBPsTo.[]', (width, bpsTo) => {
    return bpsTo
      .filter(bp => bp >= width)
      .sort()
  }).readOnly(),

  eqBPsFromAttr : computed('eqBPsFromActive', bps => {
    return bps
      .map(bp => `${bp}px`)
      .join(' ')
  }).readOnly(),

  eqBPsToAttr : computed('eqBPsToActive', bps => {
    return bps
      .map(bp => `${bp}px`)
      .join(' ')
  }).readOnly(),

  eqTransitionEventName : computed(() => {
    const el = document.createElement('fakeelement')
    const transitions = {
      'transition'       : 'transitionend',
      'OTransition'      : 'oTransitionEnd',
      'MozTransition'    : 'transitionend',
      'WebkitTransition' : 'webkitTransitionEnd',
    }

    const transitionKey =
      Object
        .keys(transitions)
        .find(t => el.style[t] !== undefined)

    return transitions[transitionKey]
  }),

  eqYieldable : computed(...YIELDABLE_PROPS, function () {
    return this.getProperties(...YIELDABLE_PROPS)
  }),



  // ----- Private computed properties -----
  _eqTrigger : computed(function () {
    return () => this.eqHandleResize()
  }),



  // ----- Public Methods -----
  eqUpdateSizes () {
    const element = this.get('element')

    if (!element || this.get('isDestroying') || this.get('isDestroyed')) return

    this.set('eqWidth',  element.offsetWidth)

    if (this.get('eqShouldUpdateHeight')) {
      this.set('eqHeight', element.offsetHeight)
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
      'eqBPsFromAttr:data-eq-from',
      'eqBPsToAttr:data-eq-to',
    ])
  },

  didInsertParent () {
    this._super(...arguments)

    if (!this.get('eqEnabled')) return

    if (!this.get('element')) throw new Error('ember-element-query used on a tagless component')

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
