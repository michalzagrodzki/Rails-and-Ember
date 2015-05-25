import Ember from 'ember';
import Application from 'presentationember/app';
import Router from 'presentationember/router';
import config from 'presentationember/config/environment';

export default function startApp(attrs) {
  var application;

  var attributes = Ember.merge({
    rootElement: '#ember-testing',
    LOG_ACTIVE_GENERATION: false,
    LOG_VIEW_LOOKUPS: false
  }, attrs); // use defaults, but you can override;

  Router.reopen({
    location: 'none'
  });

  Ember.run(function() {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
