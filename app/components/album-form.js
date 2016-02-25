import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    increaseSongs(){
      this.attrs.triggerAddSong();
    },

    submit(){
      this.attrs.triggerSave();
    }
  }
});
