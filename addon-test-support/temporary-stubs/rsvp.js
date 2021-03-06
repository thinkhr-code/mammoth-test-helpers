import RSVP from 'rsvp';
import Ember from 'ember';

export function stubRSVP() {
  RSVP.off('error');
}

export function unstubRSVP() {
  // Set up RSVP errors again
  RSVP.on('error', function(error) {
    if (error.name !== 'TransitionAborted') {
      // Ember.Test.adapter.exception(error);
      Ember.Logger.error(error.stack);
    }
  });
}
