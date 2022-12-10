import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges {
  @Input() userid:number;


  constructor() {
    console.log("Hooks Constructor Called");

  }
  ngOnChanges(changes: SimpleChanges): void {
    for(const propname in changes){
      const prop = changes[propname];
      const{previousValue, currentValue,firstChange}=prop;
      console.log('prop name ${previousValue}');
      
    }
   console.log("ngOn Changes Called");
   
  }

  ngOnInit() {

    console.log("Hooks COmponet ngOnInit called");

  }

}
