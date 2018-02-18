import Component from '@ember/component';
import { A } from '@ember/array';

export default Component.extend({
  items: null,

  init() {
    this._super(...arguments);
    this.set('items', A());
  },

  actions: {
    change(item) {
      this.get('items').pushObject(item);
    }
  }
});
