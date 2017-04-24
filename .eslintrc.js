module.exports = {
  root: true,

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  extends: 'eslint:recommended',

  env: {
    browser: true,
    embertest: true,
  },

  rules: {
    'strict': 0,
    'no-else-return': 0,
    'no-ternary': 0,
    'comma-dangle': 0,
    'no-underscore-dangle': 0,

    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'eqeqeq': 2,
    'no-lone-blocks': 2,
    'no-undefined': 2,
    'semi': 2,
    'no-shadow': 2,
    'no-use-before-define': 2,
    'prefer-template': 2,
    'no-unneeded-ternary': 2,
    'space-infix-ops': 2,

    'spaced-comment': [1, 'always'],
    'object-curly-spacing': [1, 'always'],
    'operator-linebreak': [1, 'after'],
    'no-spaced-func': 1,
    'comma-style': [1, 'last'],
    'brace-style': 1,
    'object-shorthand': 1,
    'prefer-const': 1,
    'eol-last': 1,
    'key-spacing': [1, { 'beforeColon': false, 'afterColon': true, 'mode': 'minimum' }],
    'no-trailing-spaces': 1,
    'keyword-spacing': 1,
    'no-unused-vars': 0,
    'arrow-spacing': 1,
    'no-extra-parens': 1,
    'newline-after-var': 1,
    'no-var': 1,

    'quotes': [1, 'single', 'avoid-escape'],

    'curly': 0,
    'no-magic-numbers': 0,
    'consistent-return': 0,
    'prefer-arrow-callback': 0,
    'valid-jsdoc': 0,
    'no-console': 0
  }
};
