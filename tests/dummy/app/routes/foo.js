import Route from 'ember-route';
import EmberObject from 'ember-object';

export default Route.extend({
  foo: 'gonna',

  model() {
    return EmberObject.create({
      foo: 'give'
    });
  }
});
