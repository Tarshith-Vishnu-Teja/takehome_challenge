import Controller from '@ember/controller';
import Ember from 'ember';
import axios from 'npm:axios';
//const URL_AUTH = 'http://localhost:3000/authenticate/';
const URL_AUTH = 'http://18.206.165.19:3000/authenticate/';

export default Controller.extend({
    auth:Ember.inject.service('auth'),
    actions:{
        gotoServerData:function(server_id){
            this.send('serverDetailsRoute', server_id);
        },
        logout:function(){
            var url = URL_AUTH + 'logout';
            axios.post(url,{
                headers: {
                    Authorization: 'Bearer '+this.get('auth').getAuthToken()+'' 
                }
            })
            .then(response =>{
                if(response.status == 200){
                    this.get('auth').logout();
                }
                else{
                    alert("Logout Failed");
                }
            })
            
        }
    }
});
