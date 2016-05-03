/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'e-q',
  'Integration: EQComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#e-q}}
      //     template content
      //   {{/e-q}}
      // `);

      this.render(hbs`{{e-q}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
