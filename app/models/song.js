export default DS.Model.extend({
  name: DS.attr('string'),
  artists: DS.hasMany('artist', { async: true }),
  album: DS.belongsTo('album', { async: true })
});