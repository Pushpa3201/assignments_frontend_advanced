import { Component, OnInit } from '@angular/core';
import {emp} from '../emps/emp';
@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css']
})


export class EmpsComponent {

  empid = 53392373;
  empname = "Stephen";
  job = "Manager";
  salary = 75000;
  dept = 10;

  employees:emp[]=[{empname:"scott", grade:1},
  {empname:"aborns", grade:2},
  {empname:"smith", grade:3},
  {empname:"asha", grade:4},
  {empname:"sathya", grade:2},
  {empname:"usha", grade:1},
  {empname:"maneesh", grade:3},
  {empname:"haneesh", grade:4},
  {empname:"pushpa", grade:1},];

}
