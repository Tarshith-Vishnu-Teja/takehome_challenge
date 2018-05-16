import Controller from '@ember/controller';
import Ember from 'ember';
//const URL_AUTH = 'http://localhost:3000/authenticate/';
const URL_AUTH = 'http://18.206.165.19:3000/authenticate/';

export default Controller.extend({
    ajax:Ember.inject.service(),
    auth:Ember.inject.service('auth'),
    actions:{
        validateLogin : function(){
            var email = this.get('email');
            var password = this.get('password');
            var url = URL_AUTH + 'login?email='+email+'&password='+password+'';
            return this.get('ajax').request(url)
            .then(response => {
                if(response.status == 200){
                    alert("successful login");
                    this.get('auth').setAuthToken(response.token);
                    this.transitionToRoute('home');
                }
                else if(response.status == 401){
                    alert("Invalid Username or password");
                    this.transitionToRoute('login');
                }
                else if(response.status == 403){
                    alert("Server error");
                    this.transitionToRoute('login');
                }
            })
        }
    }
});
