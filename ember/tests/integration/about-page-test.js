import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

var App;

// setup up module for running test
module('Integration - About Page', {
  setup: function(){
   App = startApp();
  },
  teardown: function(){
    Ember.run(App, 'destroy');
  }
});

// test for about page - find link which contain text 'about', navigate to page and find 'about' in h3
test('Should navigate to About page', function(assert){
  visit('/').then(function(){
    click("a:contains('About')").then(function(){
      assert.equal(find('h3').text(), 'About');
    });
  });
});

