import { test, module } from 'ember-qunit';

module('stubs/wysihtml5');

test('it exists', function(assert) {
  assert.expect(16);

  assert.isPresent(window.wysihtml5);
  assert.isPresent(window.wysihtml5.lang);
  assert.isPresent(window.wysihtml5.lang.object());
  assert.isPresent(window.wysihtml5.lang.object().clone());
  assert.isPresent(window.wysihtml5.lang.object().clone().tags);
  assert.isPresent(window.wysihtml5.lang.object().clone().tags.div);
  assert.isPresent(window.wysihtml5.lang.object().clone().tags.div.one_of_type);
  assert.isPresent(window.wysihtml5.lang.object().clone().tags.div.check_attributes);
  assert.isPresent(window.wysihtml5.lang.object().clone().tags.span);
  assert.isPresent(window.wysihtml5.Editor());
  assert.isPresent(window.wysihtml5.Editor().setValue);
  assert.isPresent(window.wysihtml5.Editor().on);
  assert.isPresent(window.wysihtml5.Editor().on().on);
  assert.isPresent(window.wysihtml5.Editor().getValue);
  assert.isPresent(window.wysihtml5.Editor().destroy);
  assert.isPresent(window.wysihtml5.commands);
});

test('setValue / getValue', function(assert) {
  assert.expect(1);

  window.wysihtml5.Editor().setValue('foo');

  const result = window.wysihtml5.Editor().getValue();

  assert.equal(result, 'foo', 'it works');
});

test('destroy value', function(assert) {
  assert.expect(1);

  window.wysihtml5.Editor().setValue('foo');
  window.wysihtml5.Editor().destroy();

  const result = window.wysihtml5.Editor().getValue();

  assert.equal(result, null, 'it works');
});
