import Ember from 'ember';

const { Test } = Ember;

export default function registerHelpers() {
  const container = function(app, path) {
    return app.__container__.lookup(path);
  };

  const route = function(app, name){
    Ember.assert('You need to pass a route name to the route helper', !!name);
    return container(app, `route:${ name }`);
  };

  const controller = function(app, name){
    Ember.assert('You need to pass a controller name to the controller helper', !!name);
    return container(app, `controller:${ name }`);
  };

  const service = function(app, name){
    Ember.assert('You need to pass a service name to the service helper', !!name);
    return container(app, `service:${ name }`);
  };

  const store = function(app) {
    return container(app, 'service:store');
  };

  const currentRoute = function(app) {
    return container(app, `route:${ currentPath() }`);
  };

  const currentController = function(app) {
    return currentRoute(app).get('controller');
  };

  const currentModel = function(app) {
    return currentRoute(app).get('currentModel');
  };

  const getSession = function(app) {
    return container(app, 'service:session');
  };

  const getCurrentAccount = function(app) {
    return container(app, 'currentAccount:main');
  };

  const setSession = function(app, path, value) {
    const thisSession = getSession(app);

    Ember.run(function() {
      thisSession.set(path, value);
    });
  };

  const metadata = function(model) {
    return this.store().metadataFor(model);
  };

  /** Return the current route's top level controller

      @return {Controller}
  */
  Test.registerHelper('currentController', currentController);


  /** Return the current route

      @return {Route}
  */
  Test.registerHelper('currentRoute', currentRoute);


  /** Return the current route's model

      @return {Model}
  */
  Test.registerHelper('currentModel', currentModel);


  /** Fetch the available metadata for a model

      @param {String}   Model's name
      @return {Object}
  */
  Test.registerHelper('getMetadata', metadata);


  /** Get the store

      @return {Store}
  */
  Test.registerHelper('getStore', store);

  /** Get a controller by its name
      - Note: this will instantiate a controller if it doesn't currently exist

      @param  {String}  Controller Name to lookup
      @return {Controller}
  */
  Test.registerHelper('getController', controller);

  /** Get a service by its name
      - Note: this will instantiate a service if it doesn't currently exist

      @param  {String}  Service Name to lookup
      @return {Service}
  */
  Test.registerHelper('getService', service);


  /** Get a route by its name
      - Note: this will instantiate a route if it doesn't currently exist

      @param  {String}  Route Name to lookup
      @return {Route}
  */
  Test.registerHelper('getRoute', route);


  /** Get the user session

      @return {Session}
  */
  Test.registerHelper('getSession', getSession);

  /** Get the current account data

      @return {CurrentAccount}
  */
  Test.registerHelper('getCurrentAccount', getCurrentAccount);


  /** Set the session
      @param  {String}  Path to the item to set (i.e. 'user.affiliate.accountConfiguration.offersHrod')
      @param  {String}  Value to set

      @return {}
  */
  Test.registerHelper('setSession', setSession);
}
