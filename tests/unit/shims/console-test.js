import { module, test } from 'qunit';

module('shims/console', function() {
  test('console exists', function(assert) {
    assert.isPresent(window.console.log, 'It exists');
  });
});
