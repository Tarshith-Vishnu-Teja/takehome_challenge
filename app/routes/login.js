import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    auth: Ember.inject.service('auth'),
    beforeModel() {
        if(this.get('auth').isLoggedIn()) {
            this.transitionTo('/home');
        }
    },
});
