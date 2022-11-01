import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  getEmps():any{
   let emps:any[] =[{empname:"scott", grade:1},
    {empname:"aborns", grade:2},
    {empname:"smith", grade:3},
    {empname:"asha", grade:4},
    {empname:"sathya", grade:2},
    {empname:"usha", grade:1},
    {empname:"maneesh", grade:3},
    {empname:"haneesh", grade:4},
    {empname:"pushpa", grade:1}];
    
    return emps;

  }

  public dataArray:any[] = [];
  public url:string  =  " http://localhost:3000/students/";
  
  constructor(private  httpObj:HttpClient) {
    
  }

  getAllStudents():Observable<any>
  {     
      return this.httpObj.get(this.url);
  }

  getStudentById(id:number):Observable<any>
  {       
      return this.httpObj.get(this.url + id);
  }

  addStudent(studentObj:any):Observable<any>
  {   
      return this.httpObj.post(this.url , studentObj);
  }

  updateStudent(studentObj:any):Observable<any>
  {     
      return this.httpObj.put(this.url + studentObj.studentId, studentObj);
  }

  deleteStudent(id:number):Observable<any>
  {     
      return this.httpObj.delete(this.url + id);
  }
}


