import Ember from 'ember';

export default Ember.Controller.extend({
  
  allArtists: Ember.computed(function(){
    return this.store.findAll('artist');
  }), 

  selectedArtists: [],

  actions: {
    save(){
      // why require album object to be created and saved before it can be sent to Rails
      //  with song? why not just send string of album title?
      let song = this.get('model');
      let album = this.store.createRecord('album', {name: this.get('albumName')});
      album.save().then((newAlbum)=>{ 
        song.set("artists", this.get("selectedArtists"));
        song.set("album", newAlbum)
        song.save().then((song)=>{
          this.transitionToRoute('songs.song', song)
        });
      });

    }
  }

});
