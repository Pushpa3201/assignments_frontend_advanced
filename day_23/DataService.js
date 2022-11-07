import   axios  from "axios";


let dataServiceObj = {};

let url =  "http://localhost:3500/employees/";

let sort = "?_sort=empno";

dataServiceObj.getAllEmps = function(){
    return axios.get(url+sort);
};
dataServiceObj.getEmpById = function(id){
    return axios.get(url+id);
};
dataServiceObj.addEmp = function(Obj){
    return axios.post(url, Obj);
};
dataServiceObj.updateEmp = function(Obj){
    return axios.put(url+Obj.empno, Obj);
};
dataServiceObj.deleteEmp = function(id){
    return axios.delete(url+id);
};

export default dataServiceObj;
   



 