import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  actions: {
    setCurrentUser(user){
      this.get("applicationController").set('currentUser', user);
    }
  }
});
