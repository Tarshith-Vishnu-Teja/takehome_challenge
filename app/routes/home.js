import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    auth: Ember.inject.service('auth'),
    serverApi:Ember.inject.service('server-api'),
    beforeModel() {
        if(!this.get('auth').isLoggedIn()) {
            this.transitionTo('/login');
        }
    },
    model(){
        return this.get('serverApi').getServerList();
    },
    actions:{
        serverDetailsRoute(server_id){
            this.transitionTo('/serverDetails?server_id='+server_id);
        }
    }
});
