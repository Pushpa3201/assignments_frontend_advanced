import { Component, OnInit } from '@angular/core';
import {prd} from '../products/prd';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent  {

  id:number=0;
  name:string="";
  price:number=0;
  cat:string="";
  qty:number=0;

  start:number=0;
  end:number=4;
  isButtonDisable:boolean=false;
  public productsArray:prd[]=[];

  getProduct():void{
        this.productsArray=[{id:1, name:"prd1", price:100, cat:"cat1", qty:1},
                            {id:2, name:"prd2", price:200, cat:"cat2", qty:2},
                            {id:3, name:"prd3", price:300, cat:"cat1", qty:3},
                            {id:4, name:"prd4", price:400, cat:"cat1", qty:4},
                            {id:5, name:"prd5", price:500, cat:"cat1", qty:5},
                            {id:6, name:"prd6", price:600, cat:"cat1", qty:6},
                            {id:7, name:"prd7", price:700, cat:"cat1", qty:7},
                            {id:8, name:"prd8", price:800, cat:"cat1", qty:8},
                            {id:9, name:"prd1", price:100, cat:"cat1", qty:1},
                            {id:10, name:"prd2", price:200, cat:"cat2", qty:2},
                            {id:11, name:"prd3", price:300, cat:"cat1", qty:3},
                            {id:12, name:"prd4", price:400, cat:"cat1", qty:4},
                            {id:13, name:"prd5", price:500, cat:"cat1", qty:5},
                            {id:14, name:"prd6", price:600, cat:"cat1", qty:6},
                            {id:15, name:"prd7", price:700, cat:"cat1", qty:7},
                            {id:16, name:"prd8", price:800, cat:"cat1", qty:8}];
  }

  addProduct():void{ 
      let prObj:prd = new prd();
      prObj.id = this.id;
      prObj.name = this.name;
      prObj.price = this.price;
      prObj.cat = this.cat;
      prObj.qty = this.qty;
      this.productsArray.push(prObj);
  }

  updateProduct(id:number):void{
      let prObj:any = this.productsArray.find(item=> item.id==id);
      prObj.name = this.name;
      prObj.price = this.price;
      prObj.cat = this.cat;
      prObj.qty = this.qty;

  }

  deletePro(id:number):void{
    let index  = this.productsArray.findIndex( item => item.id == id);
        this.productsArray.splice(index,1);
  }

  selectPro(id:number):void{
    let prObj:any = this.productsArray.find( item => item.id == id);
        this.id = prObj.id;
        this.name = prObj.name;
        this.price = prObj.price;
        this.cat = prObj.cat;
        this.qty = prObj.qty;
  }

  reset():void{

    this.id=0;
    this.name="";
    this.price=0;
    this.cat="";
    this.qty=0;

  }

  nextItems():void{
    this.end=this.end+4;

    if(this.end==this.productsArray.length){
      this.isButtonDisable=true;
    }
  }


}
