import { A } from '@ember/array'
import Mixin from '@ember/object/mixin'
import {computed} from '@ember/object'
import Evented/*, {on}*/ from '@ember/object/evented'
import {debounce, scheduleOnce} from '@ember/runloop'

import { ParentMixin, ChildMixin } from 'ember-composability-tools'

import $ from 'jquery'


const DATA_KEY               = '__eq_component__'
const JQUERY_EVENT_NAMESPACE = '__eq__'



export default Mixin.create(ParentMixin, ChildMixin, Evented, {

  // ----- Static properties -----
  eqEnabled          : true,
  eqDebounceDuration : 50,
  eqParent           : null,
  eqChildren         : computed(() => A()),



  // ----- Computed properties -----



  // ----- Public methods -----
  eqHandleResize () {
    this._eqPropagateEventToChildren()
  },

  eqRegisterChild (child) {
    const children = this.get('eqChildren')
    children.addObject(child)
  },

  eqUnregisterChild (child) {
    const children = this.get('eqChildren')
    children.removeObject(child)
  },



  // ----- Private Methods -----
  _eqGetParent () {
    const parent = this
      .$()
      .parents()
      .toArray()
      .find(el => $(el).data(DATA_KEY))

    return $(parent).data(DATA_KEY)
  },

  _eqRegisterDataAttribute () {
    this.$().data(DATA_KEY, this)
  },

  _eqSubscribeToWindowResize () {
    $(window).on(`resize.${JQUERY_EVENT_NAMESPACE}`, this._eqHandleResizeThrottled.bind(this))
  },

  _eqUnsubscribeFromWindowResize () {
    $(window).off(`.${JQUERY_EVENT_NAMESPACE}`)
  },

  _eqPropagateEventToChildren () {
    const children = this.get('eqChildren')
    children.forEach(child => child.eqHandleResize())
  },

  _eqHandleResizeThrottled () {
    const duration = this.get('eqDebounceDuration')

    if (duration) debounce(this, this._scheduleEqHandleResize, duration, true)
    else this.eqHandleResize()
  },

  _scheduleEqHandleResize () {
    scheduleOnce('afterRender', this, this.eqHandleResize)
  },



  // ----- Hooks -----
  didInsertParent () {
    this._super(...arguments)

    if (!this.get('eqEnabled')) return

    this._eqRegisterDataAttribute()

    const eqParent = this._eqGetParent()

    if (eqParent) {
      this.setProperties({eqParent})
      eqParent.eqRegisterChild(this)
    } else {
      this._eqSubscribeToWindowResize()
    }
  },

  willDestroyParent () {
    this._super(...arguments)

    if (!this.get('eqEnabled')) return

    const parent = this.get('eqParent')

    if (parent) parent.eqUnregisterChild(this)
    else this._eqUnsubscribeFromWindowResize()
  },
})
