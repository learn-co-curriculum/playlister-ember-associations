import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addSong(){
      let album = this.get('model');
      let song = this.store.createRecord('song');
      album.get('songs').addObject(song);
      song.destroy();
    }, 

    addArtist(song){
      let artist = this.store.createRecord('artist');
      song.get('artists').addObject(artist);
    },

    save(){
      let album = this.get('model');
      album.save().then((newAlbum)=>{
          this.transitionToRoute('albums.album', newAlbum.id);
      });

    }
  }
});
