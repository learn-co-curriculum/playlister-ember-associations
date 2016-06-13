import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  imageUrl: attr('string'),
  songs: hasMany('song', { async: true }),
  artists: hasMany('artist', { async: true })
});
