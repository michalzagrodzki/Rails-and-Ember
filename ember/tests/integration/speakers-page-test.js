import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';
import Pretender from 'pretender';

// variables for server test
var App, server;

// mockup data for server and for data to display

module('Integration - Speaker Page', {

  setup: function(){
    App = startApp();
    // seeding data for Speaker Page - speakers
    var speakers = [
      {   id:1,
          name: 'Elliot' },
      {   id:2,
          name: 'Faulkner' },
      {   id:3,
          name: 'Hemingway' }
    ];


    server = new Pretender(function(){
      // mockup server - index for speakers
      this.get('/api/speakers', function(request){
        return[200,
          {"Content-Type": "application/json"},
          JSON.stringify({speakers: speakers})
        ];
      });

      // mockup server - show speaker with :id = 10
      this.get('/api/speakers/:id', function(request){
        var speaker = speakers.find(function(speaker){
          if( speaker.id === parseInt(request.params.id, 10) ) {
            return speaker;
          }
        });
        return[200,
          {"Content-Type": "application/json"},
          JSON.stringify({speaker: speaker})
        ];
      });

    });

  },
  teardown: function(){
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

// tests for elements of page

// test for link to speakers index page from main page
test('Should navigate to Speakers page from main page', function(assert){
  visit('/').then(function(){
    click("a:contains('Speakers')").then(function(){
      assert.equal(find('h3').text(), 'Speakers');
    });
  });
});

// test for presence of all speakers
test('Should list all speakers', function(assert){
  visit('/speakers').then(function() {
    assert.equal(find('a:contains("Elliot")').length, 1);
    assert.equal(find('a:contains("Faulkner")').length, 1);
    assert.equal(find('a:contains("Hemingway")').length, 1);
  });
});

// test for link to selected speaker page from speaker index page
test('Should navigate to selected speaker page from speakers page', function(assert){
  visit('/speakers').then(function(){
    click('a:contains("Elliot")').then(function(){
      assert.equal(find('h4').text(), 'Elliot');
    });
  });
});

// test for presence of single speaker page - address from URL
test('Should be able to visit single speaker page', function(assert){
  visit('/speakers/1').then(function(){
      assert.equal(find('h4').text(), 'Elliot');
    });
});
