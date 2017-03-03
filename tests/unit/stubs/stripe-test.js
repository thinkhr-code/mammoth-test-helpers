import { test, module } from 'ember-qunit';

module('stubs/stripe');

test('it exists', function(assert) {
  assert.expect(2);

  assert.isPresent(window.Stripe);
  assert.isPresent(window.Stripe.setPublishableKey);
});
