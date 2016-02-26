import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    increaseSongs(){
      this.attrs.triggerAddSong();
    },

    increaseArtists(song){
      this.attrs.triggerAddArtist(song);
    },

    submit(){
      this.attrs.triggerSave();
    }
  }
});
