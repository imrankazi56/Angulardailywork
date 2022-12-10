import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title:string="Get the Input Box Value ";
  display:string="Ouput diaply here";
  displayVal:string='';
  getValue(val:string){
    console.log(val);
    this.displayVal=val;
    

  }
   
  constructor() { }

  ngOnInit() {
  }

}
