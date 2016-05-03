import resolver from './helpers/resolver';
import { setResolver } from 'ember-mocha';
import Reporter from './helpers/reporter';

setResolver(resolver);
window.mocha.reporter((runner) => new Reporter(runner, window.mocha));
window.mocha.setup({
  timeout: 30000,
  slow:     2000
});
