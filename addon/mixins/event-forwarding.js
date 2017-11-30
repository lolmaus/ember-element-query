import Mixin from '@ember/object/mixin'
// import {computed} from '@ember/object'
import Evented/*, {on}*/ from '@ember/object/evented'
import {next} from '@ember/runloop'
import {inject as service} from '@ember/service'

import {ParentMixin, ChildMixin} from 'ember-composability-tools'

import {
  DATA_KEY,
  RESIZE_EVENT_NAME,
} from '../constants'

import $ from 'jquery'



export default Mixin.create(ParentMixin, ChildMixin, Evented, {


  // ----- Services -----
  eq : service('eq'),



  // ----- Static properties -----
  eqEnabled : true,
  eqParent  : null,



  // ----- Computed properties -----



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
  _eqGetParent () {
    const parent = this
      .$()
      .parents()
      .toArray()
      .find(el => $(el).data(DATA_KEY))

    return parent
      ? $(parent).data(DATA_KEY)
      : this.get('eq')
  },

  _eqRegisterDataAttribute () {
    this.$().data(DATA_KEY, this)
  },

  _eqSubscribeToParent () {
    const eqParent = this._eqGetParent()
    this.setProperties({eqParent})
    eqParent.on(RESIZE_EVENT_NAME, this, this.eqHandleResize)
  },

  _eqUnsubscribeFromParent () {
    const eqParent = this.get('eqParent')
    eqParent.off(RESIZE_EVENT_NAME, this, this.eqHandleResize)
  },



  // ----- Hooks -----
  didInsertParent () {
    this._super(...arguments)

    if (!this.get('eqEnabled') || this.get('isDstroying') || this.get('isDestroyed') || !this.$()) return

    this._eqRegisterDataAttribute()
    this._eqSubscribeToParent()
  },

  willDestroyParent () {
    this._super(...arguments)

    if (!this.get('eqEnabled')) return

    this._eqUnsubscribeFromParent()
  },
})
