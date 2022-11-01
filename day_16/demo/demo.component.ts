import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent {
    pamount:number=0;
    rate:number=0;
    period:number=0;
    amount:number=0;

    calculateInterest():number{

      this.amount=(this.pamount*this.rate*this.period/100);
      return this.amount;
    }


}
