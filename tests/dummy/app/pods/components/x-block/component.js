import Component from '@ember/component'
// import {computed} from '@ember/object'
import EQMixin from 'ember-element-query/mixins/element-query'

import layout from './template'



export default Component.extend(EQMixin, {

  // ----- Element Query -----
  eqSlices : {
    0   : 'vertical',
    500 : 'horizontal',
  },


  // ----- Overridden properties -----
  classNames : ['xBlock'],
  layout,
})
