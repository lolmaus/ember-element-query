import Ember from 'ember';

const {
  Component
} = Ember;

import layout  from './component-template';
import EQMixin from './mixin';


/**
 *
 * A plain Ember.Compoonent that includes the element query mixin.
 * 
 * Is exposed in host app as `{{e-q}}`.
 *
 * @class EQComponent
 * @extends Ember.Component
 * @module ember-element-query
 * @uses Mixin
 * @example
 * import EQComponent from 'ember-element-query/component';
 *
 * */

export default Component.extend(EQMixin, {

  // ----- Overridden properties -----
  layout
});
