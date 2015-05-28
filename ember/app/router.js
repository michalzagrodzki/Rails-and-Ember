import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about'); // route for static page 'About'
  this.resource('speakers', function(){ // route for 'Speakers' index page
    this.route('show', {path: ':speaker_id'}); // route for 'Speaker' show page
  });
});

export default Router;
