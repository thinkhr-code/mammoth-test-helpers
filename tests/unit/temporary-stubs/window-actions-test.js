import { test, module } from 'ember-qunit';
import { stubConfirm, unstubConfirm, stubAlert, unstubAlert } from 'mammoth-test-helpers/test-support/temporary-stubs/window-actions';

module('temporary-stubs/window-actions');

test('stubConfirm / unstubConfirm', function(assert) {
  assert.expect(2);

  const oldConfirm = window.confirm;

  window.confirm = function() {
    assert.ok(true, 'It runs');
  };

  stubConfirm(message => {
    assert.equal(message, 'foo', 'it works');
  });

  window.confirm('foo');

  unstubConfirm();

  window.confirm();
  window.confirm = oldConfirm;
});

test('stubAlert / unstubAlert', function(assert) {
  assert.expect(2);

  const oldAlert = window.alert;

  window.alert = function() {
    assert.ok(true, 'It runs');
  };

  stubAlert(message => {
    assert.equal(message, 'foo', 'it works');
  });

  window.alert('foo');

  unstubAlert();

  window.alert();
  window.alert = oldAlert;
});
