import { expect } from 'chai';
import Ember from 'ember';
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'artist',
  'Artist',
  {
    // Specify the other units that are required for this test.
      needs: ['model:song', 'model:album']
  },
  function() {
    // Replace this with your real tests

    it('has a name', function() {
      let artist = this.subject({ name: "Adele" });
      expect(artist.get('name')).to.eq("Adele");
    });

     it('should have many songs', function() {
      const Artist = this.store().modelFor('artist');
      const relationship = Ember.get(Artist, 'relationshipsByName').get('songs');
      expect(relationship.kind).to.eq("hasMany");
    });

    it('should have many albums', function() {
      const Artist = this.store().modelFor('artist');
      const relationship = Ember.get(Artist, 'relationshipsByName').get('albums');
      expect(relationship.kind).to.eq("hasMany");
    });
  }
);
