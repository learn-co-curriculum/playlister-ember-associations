import Ember from 'ember';
import SimpleSession from "ember-simple-auth/services/session";

const { get, set, observer } = Ember;
const { service } = Ember.inject;

export default SimpleSession.extend({
    store: service(),
    currentUser: Ember.computed('isAuthenticated', function(){
      if (!this.get('isAuthenticated')) {return null};
      
      return this.get('store').findRecord('user', 'me')
              
    })
});