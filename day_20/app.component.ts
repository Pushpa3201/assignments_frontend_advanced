import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  public empObj :any[] = [];
  public empObj1 :any[] = [];

  constructor(private service:DataService){
     this.empObj1 = this.service.getEmps();
  }

  public btn1():any{
    this.empObj=this.empObj1;
  }
}
