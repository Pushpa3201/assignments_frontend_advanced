import { Component, OnInit } from '@angular/core';
import {DeptModel} from '../depts/DeptModel';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})

export class DeptsComponent{

  deptno:number = 0;
    dname:string = "";
    loc:string = "";
     

    public deptsArray:DeptModel[]  = [
      {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
      {deptno : 20, dname : "Sales",  loc :  "Pune"},
      {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
      {deptno : 40, dname : "Operations",  loc :  "Chnnai"}
    ];


    addDept():void
    {
      let deptObj:DeptModel = new DeptModel();
      deptObj.deptno = this.deptno;
      deptObj.dname = this.dname;
      deptObj.loc =  this.loc;

      this.deptsArray.push( deptObj );
    }

    deleteDept(dno:number):void
    { 
        // this.deptsArray.pop();
        let index  = this.deptsArray.findIndex( item => item.deptno == dno);
        this.deptsArray.splice(index,1);
    }

   selectDept(dno:number):void
    {          
        let deptObj:any = this.deptsArray.find( item => item.deptno == dno);
        this.deptno = deptObj.deptno;
        this.dname =   deptObj.dname;
        this.loc = deptObj.loc;
    }

    updateDept(dno:number):void
    { let deptObj:any = this.deptsArray.find( item => item.deptno == dno);  
      deptObj.dname = this.dname;
      deptObj.loc =  this.loc;

      //this.deptsArray.splice(this.deptno, 0, deptObj);
    }

}



 
