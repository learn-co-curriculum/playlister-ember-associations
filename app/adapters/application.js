import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: 'http://localhost:3000'
  // host: 'https://mysterious-garden-7912.herokuapp.com'
});