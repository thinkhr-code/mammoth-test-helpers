import hbs from 'htmlbars-inline-precompile';
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('test-component', 'helpers/assert-helpers', {
  integration: true
});

test('assert.equals', function(assert) {
  assert.expect(1);

  assert.equals(1, 1, 'it works');
});

test('assert.notEquals', function(assert) {
  assert.expect(1);

  assert.notEquals(1, 2, 'it works');
});

test('assert.exists', function(assert) {
  assert.expect(1);

  this.render(hbs`
    <div class="test-div" />
  `);
  assert.exists(this.$('.test-div'), 'it works');
});

test('assert.numExists', function(assert) {
  assert.expect(1);

  this.render(hbs`
    <div class="foo"></div><div class="foo"></div>
  `);

  assert.numExists(this.$('.foo'), 2, 'it works');
});

test('assert.notExists', function(assert) {
  assert.expect(1);

  this.render(hbs`
    <div class="foo"></div>
  `);

  assert.notExists(this.$('.foo-bar'), 'it works');
});

test('assert.isVisible / assert.isHidden', function(assert) {
  assert.expect(2);

  this.render(hbs`
    <div class="test-div" />
  `);
  assert.isVisible(this.$('.test-div'), 'isVisible works');

  this.$('.test-div').css('display', 'none');
  assert.isHidden(this.$('.test-div'), 'isHidden works');
});

test('assert.isFocussed / assert.isNotFocused', function(assert) {
  assert.expect(2);

  // We need to set an ad hoc ID since this is not an ember component
  this.render(hbs`
    <input class="test-input" id="foo" />
  `);

  assert.isNotFocused(this.$('.test-input'), 'isNotFocused works');

  this.$('input').focus();

  assert.isFocused(this.$('.test-input'), 'isFocused works');
});

test('assert.isPresent', function(assert) {
  assert.expect(1);

  assert.isPresent([1], 'it works');
});

test('assert.isBlank', function(assert) {
  assert.expect(1);

  assert.isBlank([], 'it works');
});

test('assert.includes / assert.contains', function(assert) {
  assert.expect(2);

  assert.includes(['foo', 'bar'], 'foo', 'it works');
  assert.contains(['foo', 'bar'], 'foo', 'it works');
});

test('assert.notIncludes / assert.notContains', function(assert) {
  assert.expect(2);

  assert.notIncludes(['bar'], 'foo', 'it works');
  assert.notContains(['bar'], 'foo', 'it works');
});

test('assert.classIncludes / assert.classContains', function(assert) {
  assert.expect(2);

  this.render(hbs`
    <div class="foo"/>
  `);

  assert.classIncludes(this.$('div'), 'foo', 'it works');
  assert.classContains(this.$('div'), 'foo', 'it works');
});

test('assert.classNotIncludes / assert.classNotContains', function(assert) {
  assert.expect(2);

  this.render(hbs`
    <div class="foo"/>
  `);

  assert.classNotIncludes(this.$('div'), 'bar', 'it works');
  assert.classNotContains(this.$('div'), 'bar', 'it works');
});
