import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'presentationember/tests/helpers/start-app';

var App;

// setup up module for running test
module('Integration - Landing Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

// test presence of text on applicatoin page
test('Should welcome me to Presentation Ember App', function(assert){
  visit('/').then(function(){
    assert.equal(find('h2#title').text(), 'Welcome to Presentation Ember App');
  });
});
