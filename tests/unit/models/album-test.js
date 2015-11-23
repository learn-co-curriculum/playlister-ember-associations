/* jshint expr:true */
import { expect } from 'chai';
import Ember from 'ember';
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'album',
  'Album',
  {
    // Specify the other units that are required for this test.
      needs: ['model:song', 'model:artist']
  },
  function() {
    // Replace this with your real tests.
   

    it('has a name and an image url', function() {
      const album = this.subject({ name: "25", imageUrl: "www.example.com" });
      expect(album.get('name')).to.eq("25");
      expect(album.get('imageUrl')).to.eq("www.example.com");
    });

    it('should have many songs', function() {
      const Album = this.store().modelFor('album');
      const relationship = Ember.get(Album, 'relationshipsByName').get('songs');
      expect(relationship.kind).to.eq("hasMany");
    });

    it('should have many artists', function() {
      const Album = this.store().modelFor('album');
      const relationship = Ember.get(Album, 'relationshipsByName').get('artists');
      expect(relationship.kind).to.eq("hasMany");
    });

  }
);