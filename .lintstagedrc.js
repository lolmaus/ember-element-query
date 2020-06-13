'use strict';

module.exports = {
  // Run TSC on all the codebase.
  // Can't run TSC on individual files because we have two envs: Node and browser,
  // and TSC does not support providing a config and a path to a specific file at the same time.
  // Thus, two separate configs are used: one for Node, one for browser.
  // The function allows running the command globally, rather than once per each staged file.
  '{addon,addon-test-support,app,mirage,test-support,tests,types}/**/*.ts': () => 'yarn lint:ts -p tsconfig.json',
  '{*,.*,blueprints/*/*,config/**/*,lib/*/index,server/**/*}.{js,ts}': () => 'yarn lint:ts -p tsconfig-node.json',

  // Run ESLint, typescript-eslint and Prettier on staged files only
  '**/*.{js,ts}': ['yarn lint:eslint --fix'],

  // Template lint
  '**/*.hbs': ['yarn ember-template-lint'],
};
