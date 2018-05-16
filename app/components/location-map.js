import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    maps: service(),

  didInsertElement() {
    this._super(...arguments);
    let location = this.get('location');
    console.log(location);
    let mapElement = this.get('maps').getMapElement(location);
    console.log(mapElement);
    this.$('.map-container').append(mapElement);
  }
});
