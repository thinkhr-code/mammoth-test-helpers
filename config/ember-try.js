/* eslint-env node */

module.exports = {
  scenarios: [
    {
      name: 'default',
      dependencies: { }
    },
    {
      name: 'ember-lts-2.18',
      npm: {
        devDependencies: {
          'ember-source': '~2.12.0'
        }
      }
    },
    {
      name: 'Ember 3.0.0',
      npm: {
        devDependencies: {
          'ember-source': '~3.0.0'
        }
      }
    },
    {
      name: 'Ember 3.5.0',
      npm: {
        devDependencies: {
          'ember-source': '~3.5.0'
        }
      }
    }
  ]
};
