import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists', function() {
    this.route('artist', { path: '/:artist_id' });
  });
  this.route('songs', function() {
    this.route('song', { path: '/:song_id' });
    this.route('new');
  });
  this.route('albums', function() {
    this.route('album', { path: '/:album_id' });
    this.route('new');
  });
  this.route('collaborations', function() {
    this.route('collaboration', { path: '/:collaboration_id' });
  });
  this.route('login');
  this.route('users', function() {
    this.route('user', { path: '/:user_id' });
  })
});

export default Router;
 