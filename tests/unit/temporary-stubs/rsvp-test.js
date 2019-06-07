import { module, test } from 'qunit';
import { stubRSVP, unstubRSVP } from 'mammoth-test-helpers/test-support/temporary-stubs/rsvp';
import RSVP from 'rsvp';

import { settled } from '@ember/test-helpers';

module('temporary-stubs/rsvp', function() {
  test('it works', function(assert) {
    assert.expect(0);

    stubRSVP();

    const promise = new RSVP.Promise(function(resolve, reject) {
      reject('explosion');
    });

    promise.then(() => {
      assert.ok(false, 'Promise passed when it should have failed');
    });

    return settled().then(() => {
      unstubRSVP();
    });
  });
});
