import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';


@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {
  public usersArray : any[] = [];
  public empsArray : any[] = [];
      constructor(private httpObj:HttpClient, private  serviceObj:DataService){ }

      public bt1(){
        let url1 = "https://www.w3schools.com/angular/customers.php";
        let url2 = " http://localhost:3000/employees";
        this.httpObj.get(url1).subscribe((Response:any)=>{
          //console.log(Response);
          this.usersArray=Response.records;
      });

      this.httpObj.get(url2).subscribe((Response:any)=>{
        //console.log(Response);
        this.empsArray=Response;
    });

  }

  name:string  = "";
  city:string  = "";
  email:string  = "";
  age:number = 0;
  studentId:number = 0;

  public studentsArray:any[] =  [];
 
  public getData_click()
  {	 
       this.serviceObj.getAllStudents().subscribe( (response:any) =>
       {
          this.studentsArray = response;
       });
  }

  public addData_click()
  {	 
    let stObj:any = {};
    stObj.studentId = 0;
    stObj.name = this.name;
    stObj.city = this.city;
    stObj.email = this.email;
    stObj.age = this.age;


    this.serviceObj.addStudent(stObj).subscribe( (response:any) =>
    {
      // this.studentsArray = response;
      alert("New Student details are added to server");
      this.getData_click();
    });
  }


  public selectData_click(id:number)
  {	 
       this.serviceObj.getStudentById(id).subscribe( (resData:any) =>
       {this.studentId=resData.studentId;
        this.name = resData.name;
        this.email = resData.email;
        this.city = resData.city;
        this.age = resData.age;
       });
  }

  public deleteData_click(id:number)
  {	 
       this.serviceObj.deleteStudent(id).subscribe( (resData:any) =>
       {
        alert("Selected Student details are deleted from  server");
        this.getData_click();
       });
  }

  public updateData_click(id:number)
  {	  
   // let stObj = this.studentsArray.find(item => item.studentId==id);
   let stObj:any ={};
   stObj.studentId=id;
    stObj.name=this.name;
      stObj.email=this.email;
      stObj.city = this.city;
      stObj.age = this.age;
       this.serviceObj.updateStudent(stObj).subscribe((response:any)=>{
        //alert("Student details are Updated");
        this.getData_click();
       });
  }

  public clearFields(){
    this.name="";
    this.email="";
    this.city="";
    this.age=0;
  }


}
