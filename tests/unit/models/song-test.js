import { expect } from 'chai';
import Ember from 'ember';
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'song',
  'Song',
  {
    // Specify the other units that are required for this test.
      needs: ['model:artist', 'model:album']
  },
  function() {
    // Replace this with your real tests.
   

    it('has a name', function() {
      let song = this.subject({ name: "Hello" });
      expect(song.get('name')).to.eq("Hello");
    });

    it('should have many artists', function() {
      const Song = this.store().modelFor('song');
      const relationship = Ember.get(Song, 'relationshipsByName').get('artists');
      expect(relationship.kind).to.eq("hasMany");
    });

    it('should belong to an album', function() {
      const Song = this.store().modelFor('song');
      const relationship = Ember.get(Song, 'relationshipsByName').get('album');
      expect(relationship.kind).to.eq("belongsTo");
    });
  }
);
