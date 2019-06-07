/* eslint-env node */

module.exports = {
  extends: 'mammoth',

  rules: {
    'ember/named-functions-in-promises': 0,
    'ember/alias-model-in-controller': 0,
    'ember/use-ember-get-and-set': 0
  },

  globals: {
    visit: true
  }
};
