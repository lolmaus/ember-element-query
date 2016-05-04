import Ember from 'ember';

const {
  Component
} = Ember;

import EEQMixin from 'ember-element-query/mixin';
import layout   from 'ember-element-query/templates/components/e-q';


/**
 *
 * A plain Ember.Component that includes EEQ.Mixin.
 *
 * It iss exposed in host app as `{{#e-q}}`.
 *
 * @class EEQ.Component
 * @extends Ember.Component
 * @module ember-element-query
 * @uses EEQ.Mixin
 * @example
 * import EEQComponent from 'ember-element-query/component';
 *
 * */

export default Component.extend(EEQMixin, {
  layout
});
