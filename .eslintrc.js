'use strict';

const nodeFiles = [
  '.eslintrc.js',
  '.lintstagedrc.js',
  '.prettierrc.js',
  '.template-lintrc.{js,ts}',
  'ember-cli-build.{js,ts}',
  'testem.{js,ts}',
  'blueprints/*/index.{js,ts}',
  'config/**/*.{js,ts}',
  'lib/*/index.{js,ts}',
  'server/**/*.{js,ts}',
  'tests/dummy/config/**/*.{js,ts}',
];

const browserFiles = [
  'addon/**/*.{js,ts}',
  'addon-test-support/**/*.{js,ts}',
  'app/**/*.{js,ts}',
  'test-support/**/*.{js,ts}',
  'types/**/*.{js,ts}',
];

const browserTestFiles = ['tests/**/*.{js,ts}'];

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
    project: ['./tsconfig.json', './tsconfig-node.json'],
  },
  plugins: ['@typescript-eslint', 'ember', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:ember/recommended',
    'standard',

    'prettier',

    // This one should come last
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-expect-error': 'allow-with-description', 'ts-ignore': 'allow-with-description' },
    ],
    '@typescript-eslint/camelcase': 'off', // Allow two levels of separation, e. g. ProductWizard_SidebarConfig_ListWithHeader_Component_Args
    '@typescript-eslint/class-name-casing': 'off', // Allow two levels of separation, e. g. ProductWizard_SidebarConfig_ListWithHeader_Component_Args
    '@typescript-eslint/no-empty-function': 'off', // Noop is a valid technique.
    '@typescript-eslint/no-empty-interface': 'off', // Required for simplified typing of Mirage and Ember Data
    '@typescript-eslint/no-non-null-assertion': 'off', // When I do it, I mean it.
    '@typescript-eslint/no-unsafe-assignment': 'off', // Reenabled for TS files only
    '@typescript-eslint/no-unsafe-call': 'off', // Reenabled for TS files only
    '@typescript-eslint/no-unsafe-member-access': 'off', // Reenabled for TS files only
    '@typescript-eslint/no-unsafe-return': 'off', // Reenabled for TS files only
    '@typescript-eslint/no-unused-expressions': 'off', // Reenabled for non-tests only (Chai needs this disabled)
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-var-requires': 'off', // Reenabled for non-Node files only

    // As this rule would freak out on JS files (by design!),
    // it has to be enabled only for .ts in the overrides section,
    // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md#configuring-in-a-mixed-jsts-codebase
    '@typescript-eslint/explicit-function-return-type': 'off',

    camelcase: 'off', // Have to keep this off for the TS equivalent to take precedence
    'no-console': ['error', { allow: ['debug', 'error', 'info', 'warn'] }],
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off', // We need circular references
    'no-useless-constructor': 'off', // This rule crashes ESLint unless disabled

    'node/no-unpublished-require': 'off', // Reenabled for non-Node files only

    'prefer-const': 'error', // Only use `let` when you are actually mutating the variable
    'prettier/prettier': 'error',
  },
  overrides: [
    // node files
    {
      files: nodeFiles,
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // add your custom rules and overrides for node files here
        'node/no-unsupported-features/es-syntax': ['error', { version: '>=12.0.0' }],
      },
    },
    {
      // browser files, including tests
      files: [...browserFiles, ...browserTestFiles],
      rules: {
        '@typescript-eslint/no-var-requires': 'error', // Reenabled for non-Node files only
        'node/no-unpublished-require': 'error', // Reenabled for non-Node files only
      },
    },
    {
      /// non-tests
      files: [...nodeFiles, ...browserFiles],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'error', // Reenabled for non-tests only (Chai needs this disabled)
      },
    },
    {
      // TS files
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error', // We want to be strict with types
        '@typescript-eslint/no-unsafe-assignment': 'error', // Reenabled for TS files only
        '@typescript-eslint/no-unsafe-call': 'error', // Reenabled for TS files only
        '@typescript-eslint/no-unsafe-member-access': 'error', // Reenabled for TS files only
        '@typescript-eslint/no-unsafe-return': 'error', // Reenabled for TS files only
      },
    },
  ],
};
