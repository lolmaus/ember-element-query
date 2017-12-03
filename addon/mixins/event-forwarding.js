import Mixin from '@ember/object/mixin'
import {computed} from '@ember/object'
import Evented/*, {on}*/ from '@ember/object/evented'
import {next, scheduleOnce} from '@ember/runloop'
import {inject as service} from '@ember/service'

import {ParentMixin, ChildMixin} from 'ember-composability-tools'

import {RESIZE_EVENT_NAME} from '../constants'



const EventForwardingMixin = Mixin.create(ParentMixin, ChildMixin, Evented, {

  // ----- Arguments -----
  eqTransitionSelectors : null,



  // ----- Services -----
  eq : service('eq'),



  // ----- Static properties -----
  eqEnabled : true,



  // ----- Computed properties -----
  eqParent : computed(function () {
    return this.nearestOfType(EventForwardingMixin) || this.get('eq')
  }),

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



  // ----- Private computed properties -----
  _eqTrigger : computed(function () {
    return () => scheduleOnce('afterRender', this, this.eqHandleResize)
  }),



  // ----- Public methods -----
  // Overridable
  eqHandleResize () {
    this.eqTriggerResize()
  },

  eqTriggerResize () {
    // this.trigger(RESIZE_EVENT_NAME)
    next(this, this.trigger, RESIZE_EVENT_NAME) // https://github.com/emberjs/ember.js/issues/15479#issuecomment-347006683
  },



  // ----- Private Methods -----
  _eqSubscribeToParent () {
    const eqParent = this.get('eqParent')
    eqParent.on(RESIZE_EVENT_NAME, this, this.eqHandleResize)
  },

  _eqUnsubscribeFromParent () {
    const eqParent = this.get('eqParent')
    eqParent.off(RESIZE_EVENT_NAME, this, this.eqHandleResize)
  },

  _eqFind (selector) {
    const element = this.get('element')
    const children = element.querySelectorAll(selector)
    return [].slice.call(children) // convert NodeList to Array
  },

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
        const children = this._eqFind(className)

        children.forEach(child => child.addEventListener(eqTransitionEventName, eqTrigger))
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
        const children = this._eqFind(className)

        children.forEach(child => child.removeEventListener(eqTransitionEventName, eqTrigger))
      })
  },



  // ----- Hooks -----
  didInsertParent () {
    this._super(...arguments)

    if (!this.get('eqEnabled')) return

    if (!this.get('element')) throw new Error('ember-element-query used on a tagless component')

    this._eqSubscribeToParent()
    this._eqSetupTransitions()
  },

  willDestroyParent () {
    this._super(...arguments)

    this._eqTeardownTransitions()
    this._eqUnsubscribeFromParent()
  },
})



export default EventForwardingMixin
