import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';

export default {
  // data-path and data-id are for test helpers
  attributeBindings: ['data-path', 'data-1-id', 'data-2-id', 'data-3-id', 'data-4-id'],

  /**
     This overrides the link-to helper for all tests so that the path and ID are
     injected into data attributes.
     This solves the issue for unit tests where the router hasn't been booted
     (so link-to helpers have no URL)
  */
  'data-path': alias('route'),
  'data-1-id': computed('_models', function() {
    return this.get('_models')[0];
  }),
  'data-2-id': computed('_models', function() {
    return this.get('_models')[1];
  }),
  'data-3-id': computed('_models', function() {
    return this.get('_models')[2];
  }),
  'data-4-id': computed('_models', function() {
    return this.get('_models')[3];
  }),
};
