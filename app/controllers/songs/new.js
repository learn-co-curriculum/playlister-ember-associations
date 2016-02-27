import Ember from 'ember';

export default Ember.Controller.extend({
  
  allArtists: Ember.computed(function(){
    return this.store.findAll('artist');
  }), 

  selectedArtists: [],

  actions: {
    save(){
      
      let song = this.get('model');
      song.set("artists", this.get("selectedArtists"));
      song.save().then(()=>{
        this.transitionToRoute('songs.song', song);
      })
    }
  }

});
