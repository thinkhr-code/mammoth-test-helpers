import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import selectASelect from 'mammoth-test-helpers/test-support/helpers/select-a-select';

module('helpers/select-a-select', function(hooks) {
  setupRenderingTest(hooks);

  test('it can select an item with a jquery object', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{ select-component }}
    `);

    selectASelect('select', 1);

    assert.equal(findAll('select>option')[0].selected, false, 'The first item is not selected');
    assert.equal(findAll('select>option')[1].selected, true, 'The second item is selected');
  });

  test('it can select an item with a function', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{ select-component }}
    `);

    selectASelect('select', select => select.querySelector('option'));

    assert.equal(findAll('select>option')[0].selected, true, 'The first item is selected');
    assert.equal(findAll('select>option')[1].selected, false, 'The second item is not selected');
  });
});
