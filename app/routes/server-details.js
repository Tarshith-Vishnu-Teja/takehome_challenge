import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    queryParams:{server_id:{refreshModel:true}},
    serverApi:Ember.inject.service('server-api'),
    auth: Ember.inject.service('auth'),
    beforeModel(){
        if(!this.get('auth').isLoggedIn()) {
            this.transitionTo('/login');
        }
    },
    model(params){
        return this.get('serverApi').getServerDetails(params.server_id);
    }
});
