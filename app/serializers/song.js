import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    album: { embedded: 'always' },
    artist_ids: {serialize: 'ids'}
  }
});
