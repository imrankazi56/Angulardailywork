import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {
 text:string;
  constructor() { }
  callMe(event){
    this.text="Hello Button Click";
    console.log(event);
    
  }
  employee:any={
    name:"Imran KAzi",
    salary:30000,
    eid:101


  }

  setName(val){
    console.log(val);
    this.employee.name=val;
    
  }

  ngOnInit() {
  }

}
