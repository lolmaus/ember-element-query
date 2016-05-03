/* jshint expr:true */
// import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import trigger from 'ember-element-query/trigger';

describe('trigger', function() {
  // Replace this with your real tests.
  it('works', function(done) {
    window.addEventListener('eq-update', () => done());
    trigger();
  });
});
