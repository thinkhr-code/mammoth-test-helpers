import Ember from 'ember';
import Component from 'ember-component';

export default Component.extend({
  items: null,

  init() {
    this._super(...arguments);
    this.set('items', Ember.A());
  },

  actions: {
    change(item) {
      this.get('items').pushObject(item);
    }
  }
});
