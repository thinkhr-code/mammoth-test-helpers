import hbs from 'htmlbars-inline-precompile';
import { test, moduleForComponent } from 'ember-qunit';
import selectASelect from 'mammoth-test-helpers/test-support/helpers/select-a-select';

moduleForComponent('select-component', 'helpers/select-a-select', {
  integration: true
});

test('it can select an item with a jquery object', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{ select-component }}
  `);

  selectASelect(this.$('select'), 1);

  assert.equal(this.$('select>option:eq(0)').prop('selected'), false, 'The first item is not selected');
  assert.equal(this.$('select>option:eq(1)').prop('selected'), true, 'The second item is selected');
});

test('it can select an item with a function', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{ select-component }}
  `);

  selectASelect(this.$('select'), select => select.find('option:eq(0)'));

  assert.equal(this.$('select>option:eq(0)').prop('selected'), true, 'The first item is selected');
  assert.equal(this.$('select>option:eq(1)').prop('selected'), false, 'The second item is not selected');
});
