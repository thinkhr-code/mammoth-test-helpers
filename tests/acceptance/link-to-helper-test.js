import moduleForAcceptance from '../helpers/module-for-acceptance';
import { test } from 'ember-qunit';

moduleForAcceptance('link-to-helper');

test('it adds the correct data attributes', function(assert) {
  assert.expect(3);

  visit('foo');

  andThen(() => {
    const link = $('.foo>a');

    assert.equal(link.attr('data-path'), 'button.show.content', 'The path is correct');
    assert.equal(link.attr('data-1-id'), 5, 'The first model Id is correct');
    assert.equal(link.attr('data-2-id'), 6, 'The first model Id is correct');

  });
});
