import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { find, visit } from '@ember/test-helpers';

module('link-to-helper', function(hooks) {
  setupApplicationTest(hooks);

  test('it adds the correct data attributes', async function(assert) {
    assert.expect(3);

    await visit('foo');

    const link = find('.foo>a');

    assert.equal(link.dataset['path'], 'button.show.content', 'The path is correct');
    assert.equal(link.dataset['1Id'], 5, 'The first model Id is correct');
    assert.equal(link.dataset['2Id'], 6, 'The first model Id is correct');
  });
});
