import { test, module } from 'ember-qunit';

module('shims/console');

test('console exists', function(assert) {
  assert.isPresent(window.console.log, 'It exists');
});
