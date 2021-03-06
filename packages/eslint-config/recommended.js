'use strict'

module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    'array-callback-return': ['error', { allowImplicit: true }],
    'arrow-body-style': ['error', 'as-needed'],
    complexity: ['error', 15],
    curly: 'error',
    'dot-notation': ['error', { allowKeywords: true }],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-console': ['error', { allow: ['assert', 'warn', 'error'] }],
    'no-constructor-return': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-extra-bind': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-dupe-else-if': 'error',
    'no-import-assign': 'error',
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],
    'no-implied-eval': 'error',
    'no-path-concat': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'properties'],
    'prefer-const': ['error'],
    'prefer-regex-literals': 'error',
    'require-unicode-regexp': 'error',
    'spaced-comment': ['error', 'always'],
    strict: ['error', 'safe'],
  },
  reportUnusedDisableDirectives: true,
}
