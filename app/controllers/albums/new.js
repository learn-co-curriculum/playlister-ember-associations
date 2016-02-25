import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addSong(){
      let album = this.get('model');
      let song = this.store.createRecord('song');
      album.get('songs').addObject(song);
    }, 

    save(){
      let album = this.get('model');
      let song = this.get('model').get('songs').objectAt(0);
      song.save().then(()=>{

        album.save();
      })

    }
  }
});
