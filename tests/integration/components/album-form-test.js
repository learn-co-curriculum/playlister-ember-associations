/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'album-form',
  'Integration: AlbumFormComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#album-form}}
      //     template content
      //   {{/album-form}}
      // `);

      this.render(hbs`{{album-form}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
