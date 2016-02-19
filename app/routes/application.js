import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {

  ssession: service('session'),

  actions: {
    logout(){
      this.get("session").invalidate();
      alert("bye! we'll miss you :(");
    }
  },

  
});

  
