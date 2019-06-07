import { module, test } from 'qunit';

module('stubs/stripe', function() {
  test('it exists', function(assert) {
    assert.expect(2);

    assert.isPresent(window.Stripe);
    assert.isPresent(window.Stripe.setPublishableKey);
  });
});
