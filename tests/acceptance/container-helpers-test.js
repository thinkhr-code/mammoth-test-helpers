/* global currentController currentRoute currentModel getController getRoute getService getStore*/

import moduleForAcceptance from '../helpers/module-for-acceptance';
import { test } from 'ember-qunit';

moduleForAcceptance('helpers/container-helpers');

test('it adds the correct data attributes', function(assert) {
  assert.expect(7);

  visit('foo');

  andThen(() => {
    const controller = currentController();
    const route = currentRoute();
    const model = currentModel();
    const applicationController = getController('application');
    const applicationRoute = getRoute('application');

    assert.equal(controller.get('foo'), 'never', 'currentController works');
    assert.equal(route.get('foo'), 'gonna', 'currentRoute works');
    assert.equal(model.get('foo'), 'give', 'currentModel works');
    assert.equal(applicationController.get('foo'), 'you', 'getController works');
    assert.equal(applicationRoute.get('foo'), 'up', 'getController works');

    const service = getService('bar');
    const store = getStore();

    assert.equal(service.get('rick'), 'roll', 'getService works');
    assert.equal(store.get('rick'), 'rolled', 'getStore works');
  });
});
