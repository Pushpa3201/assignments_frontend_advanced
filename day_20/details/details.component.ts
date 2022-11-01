import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  empObj:any = {};

  public emps:any[]  = [
    {
      "empno": 10,
      "ename": "Akhilesh",
      "job": "CEO",
      "deptno": 100
    },
    {
      "empno": 20,
      "ename": "Bhavana",
      "job": "Analyst",
      "deptno": 101
    },
    {
      "empno": 30,
      "ename": "Catherene",
      "job": "Consultant",
      "deptno": 102
    },
    {
      "empno": "40",
      "ename": "Pushpa",
      "job": "Consultant",
      "deptno": "103"
    },
    {
      "empno": "50",
      "ename": "Anil",
      "job": "Leader",
      "deptno": "105"
    },
    {
      "empno": "60",
      "ename": "Sravanthi",
      "job": "Sr Analyst",
      "deptno": "106"
    }
  ]


    constructor(private  activatedRouteObj: ActivatedRoute)
		{
       
		}


  ngOnInit(): void {
    let eno = this.activatedRouteObj.snapshot.params["id"];
    this.empObj =  this.emps.find(item => item.empno == eno);
  }
  
}

