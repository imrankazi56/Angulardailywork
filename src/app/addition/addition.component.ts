import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

 
  constructor() { }

  ngOnInit():void{
  }
  c:number;
  
  addition(val:number,val1:number){
    this.c=val + val1;

  }
firstnumber:string;
secondnumber:string;
result:number;

Addition(first:string,second:string){
  this.result=parseFloat(first)+parseFloat(second)
}
firststr:string;
secondstr:string;
result1:string;

stringJoin(x:string,y:string){
this.result1=x + y;
}
}
