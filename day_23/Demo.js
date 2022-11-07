import { useState } from "react";
import  dataServiceObj  from "./DataService";


function Demo() {

    
    let  [empsArray, setEmpsArray] = useState([]);
    const [eno, setEno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [deptno, setDeptno] = useState("");   
  function getDataClick()
  {  
       dataServiceObj.getAllEmps().then(response =>{
        return setEmpsArray(response.data);
       });
  }
  function addDataClick()
  {  let Obj ={};
      Obj.empno = eno;
      Obj.ename = ename;
      Obj.job = job;
      Obj.deptno = deptno;
       dataServiceObj.addEmp(Obj).then(response =>{
        getDataClick();
       });
  }
  function selectEmpClick(eno)
  {    
       dataServiceObj.getEmpById(eno).then(response =>{
        let empObj = response.data;
        setEno( empObj.empno); 
        setEname(empObj.ename);
        setJob(empObj.job);
        setDeptno(empObj.deptno);
       });
  }
  function removeEmpClick(eno)
  {  
       dataServiceObj.deleteEmp(eno).then(response =>{
        getDataClick();
       })
  }
  function updateDataClick()
  {  let Obj = {};
      Obj.empno = eno;
      Obj.ename = ename;
      Obj.job = job;
      Obj.deptno=deptno;
       dataServiceObj.updateEmp(Obj).then(response =>{
        getDataClick();
       })
  }
   
  let result  =  empsArray.map( (item, index) =>  
  {
    return <tr>                
             <td> {item.empno}  </td>  
             <td> {item.ename}  </td>                
             <td> {item.job}  </td>
             <td>{item.deptno}</td>  
             <td>
               <a href="javascript:void(0)" onClick={ () => removeEmpClick(item.empno)}> Delete </a>  |   
               <a href="javascript:void(0)" onClick={ () => selectEmpClick(item.empno)}> Select </a>   
          </td>
        </tr>
  });
 
    return (
       <div> 
            <h3>Making HTTP Request using Axios Package</h3>
            <hr/>
            <input type="text" value={eno} placeholder="Empno"  
            onChange={(e) => setEno(e.target.value)}   />

             <input type="text" value={ename} placeholder="Emp Name"  
            onChange={(e) => setEname(e.target.value)}   />

            <input type="text" value={job} placeholder="Job"  
            onChange={(e) => setJob(e.target.value)}   />

            <input type="text" value={deptno} placeholder="Dept No"  
            onChange={(e) => setDeptno(e.target.value)}   />
            <br/><br/> 
 
            <button className="btn  btn-primary" onClick={getDataClick}>Get Data</button>
            <button className="btn  btn-primary" onClick={ () => addDataClick()}>Add Data</button>
            <button className="btn  btn-primary" onClick={() => updateDataClick()}>Update Data</button>
            <br/><br/><br/><br/>
            <table className="table" border="2"> 
             <thead>
                <tr>
                  <th>Emp No</th>
                  <th>Emp Name</th>
                  <th>Job</th>
                  <th>Dept No</th>
                  <th></th>
              </tr>
              </thead>

              <tbody>
              {result}  
              </tbody>               
            </table> 

            
      </div>
    );
  }
  
  export default Demo;

 