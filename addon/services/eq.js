import {computed} from '@ember/object'
import Evented/*, {on}*/ from '@ember/object/evented'
import {once} from '@ember/runloop'
import Service from '@ember/service'

import mapping from 'ember-element-query-mapping'
import $ from 'jquery'

import throttleBeforeAfter from '../-private/throttle-before-after'

import {
  JQUERY_EVENT_NAMESPACE,
  RESIZE_EVENT_NAME,
} from '../constants'



export default Service.extend(Evented, {

  // ----- Static properties -----
  eqThrottleDuration : 50,



  // ----- Computed properties -----
  $window : computed(() => $(window)),
  mapping,



  // ----- Overridden methods -----
  init () {
    this._super()
    this._subscribeToWindowResize()
  },

  willDestroy () {
    this._super()
    this._unsubscribeFromWindowResize()
  },



  // ----- Public methods -----
  triggerResize () {
    this.trigger(RESIZE_EVENT_NAME)
  },



  // ----- Private methods -----
  _subscribeToWindowResize () {
    const duration  = this.get('eqThrottleDuration')
    const $window   = this.get('$window')
    const eventName = `resize${JQUERY_EVENT_NAMESPACE}`

    const throttled = throttleBeforeAfter(duration, () => {
      once(this, this.triggerResize)
    })

    $window.on(eventName, throttled)
  },

  _unsubscribeFromWindowResize () {
    const $window  = this.get('$window')
    $window.off(JQUERY_EVENT_NAMESPACE)
  },
})
