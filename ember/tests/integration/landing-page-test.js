import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

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

// test for presence of text on application page
test('Should welcome me to Presentation Ember App', function(assert){
  visit('/').then(function(){
    assert.equal(find('h2#title').text(), 'Welcome to Presentation Ember App');
  });
});

// test for presence of back button, after clicking link 'home' check if header h3 changed from About into something else.
test('Should allow to navigate back to main page', function(assert){
  visit('/about').then(function(){
    click('a:contains("Home")').then(function(){
      assert.notEqual(find('h3').text(), 'About');
    });
  });
});
