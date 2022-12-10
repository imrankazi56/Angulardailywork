import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()name:string;
  @Input()data:string[];
  @Input()concat:string;
  @Input()pData:string;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes:any){
    console.log("ngOnChanges called");
    
  }

}
