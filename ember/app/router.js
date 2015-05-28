import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about'); // route for static page 'About'
  this.resource('speakers'); // route for 'Speakers' index page
});

export default Router;
