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

