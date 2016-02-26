import DS from 'ember-data';

// export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
//   attrs: {
//     artists: {serialize: 'records'},
//     album: {serialize: 'record'}
//   }
// });

import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    artists: {serialize: 'records'},
    album: {serialize: 'record'}
  }
});
