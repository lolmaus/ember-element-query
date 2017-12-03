// import {computed} from '@ember/object'
import Evented/*, {on}*/ from '@ember/object/evented'
import {once} from '@ember/runloop'
import Service from '@ember/service'

import mapping from 'ember-element-query-mapping'

import throttleBeforeAfter from '../-private/throttle-before-after'

import {RESIZE_EVENT_NAME} from '../constants'



export default Service.extend(Evented, {

  // ----- Static properties -----
  eqThrottleDuration : 50,



  // ----- Computed properties -----
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



  // ----- PrivateMethods -----
  _throttledWindowResize : null, // set in _subscribeToWindowResize



  // ----- Private methods -----
  _subscribeToWindowResize () {
    const duration  = this.get('eqThrottleDuration')

    const _throttledWindowResize = throttleBeforeAfter(duration, () => {
      once(this, this.triggerResize)
    })

    this.setProperties({_throttledWindowResize})

    window.addEventListener('resize', _throttledWindowResize)
  },

  _unsubscribeFromWindowResize () {
    window.removeEventListener('resize', this._throttledWindowResize)
  },
})
