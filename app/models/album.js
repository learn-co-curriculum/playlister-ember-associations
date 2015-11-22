import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  imageUrl: DS.attr('string'),
  songs: DS.hasMany('song'),
  artists: DS.hasMany('artist')
});
