import Controller from '@ember/controller';

export default Controller.extend({
    server_id:null,
    queryParams:['server_id'],
    actions:{
        goBack(){
            console.log("going back...");
            history.back();
        }
    }
});
