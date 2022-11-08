import   axios  from "axios";

var dataServiceObj = {};

var url =  "http://localhost:3500/login/";


dataServiceObj.addData = function(Obj){

    return axios.post(url, Obj);
    
};


export default dataServiceObj;