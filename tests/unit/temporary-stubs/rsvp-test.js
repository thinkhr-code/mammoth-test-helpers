import { test, module } from 'ember-qunit';
import { stubRSVP, unstubRSVP } from 'mammoth-test-helpers/test-support/temporary-stubs/rsvp';
import Ember from 'ember';
import wait from 'ember-test-helpers/wait';

const { RSVP } = Ember;

module('temporary-stubs/rsvp');

test('it works', function(assert) {
  assert.expect(0);

  stubRSVP();

  const promise = new RSVP.Promise(function(resolve, reject) {
    reject('explosion');
  });

  promise.then(() => {
    assert.ok(false, 'Promise passed when it should have failed');
  });

  return wait().then(() => {
    unstubRSVP();
  });
});
