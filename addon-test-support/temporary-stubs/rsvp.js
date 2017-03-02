import Ember from 'ember';

export function stubRSVP() {
  Ember.RSVP.off('error');
}

export function unstubRSVP() {
  // Set up RSVP errors again
  Ember.RSVP.on('error', function(error) {
    if (error.name !== 'TransitionAborted') {
      Ember.Test.adapter.exception(error);
      Ember.Logger.error(error.stack);
    }
  });
}
