import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    /*uid:string="";
    pwd:string="";
    isButtonDisable:boolean=false;
    count:number=0;
    result:string ="";
    pcolor:string="";
    isValidUser():void{
      if(this.uid =="admin" && this.pwd== "admin123"){
          this.result="Welocme to Admin";
        this.pcolor="green";
      }
      else{
        this.count++;
        this.result="Invalid userid or password";
        this.pcolor="red";
        if(this.count==10){
            this.isButtonDisable=true;
        }
        
      }
    } */

    uid:string  = "admin";
    pwd:string  = "admin123";
    result:string  = "";
 

    constructor(private router:Router, private activatedRouteObj:ActivatedRoute) { }

    isValidUser():void
    {     

      var str:string  = this.activatedRouteObj.snapshot.queryParams["returnUrl"];
     
      if(str == null) 
      {  
        str  = "/"; 
      }

      if(this.uid == "admin"  && this.pwd == "admin123")
      {
        //  a. Create the token
        sessionStorage.setItem("AUTH_TOKEN", this.uid);

        // b.  Redirect to requested page or default page
        this.router.navigate([str]);
      }
      else
      {
        this.result  = "Invalid user id or password";
      }
    }

    

}
