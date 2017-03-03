import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('foo');

  this.route('button', function() {
    this.route('show', { path: ':button_id' }, function() {
      this.route('content', { path: ':content_id' });
    });
  });
});

export default Router;
