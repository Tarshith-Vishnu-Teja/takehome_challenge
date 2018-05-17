import Service from '@ember/service';
import Ember from 'ember';
import axios from 'npm:axios';

//const BASE_URL = 'http://localhost:3000/server/';
const BASE_URL = 'http://18.206.165.19:3000/server/';

export default Service.extend({
    auth:Ember.inject.service('auth'),
    getServerList(){
        const url = BASE_URL + 'serverList';
        return axios.post(url, {
            headers: {
                Authorization: 'Bearer '+this.get('auth').getAuthToken()+'' 
            }
        })
        .then(response => {
            if(response.status == 200){
                return response.data.result;
            }
            else if(response.status == 403)
                return "";
        });
    },

    getServerDetails(server_id){
        const url = BASE_URL + 'serverDetails?server_id='+ server_id +'';
        return axios.post(url,{
            headers:{
                Authorization: 'Bearer '+this.get('auth').getAuthToken()+''
            }
        })
        .then(response => {
            if(response.status == 200){
                return response.data.result;
            }
            else if(response.status == 403)
                return "";
        });
    }
});
