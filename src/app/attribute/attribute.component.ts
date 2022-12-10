import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  colorVal = 'blue';
  people:any[]=[
    {
      "name":"Jack",
      "country":"UK"
    },
    {
      "name":"Mohit",
      "country":"India"
    },
    {
      "name":"rAJ",
      "country":"India"
    },
    {
      "name":"sHARMA",
      "country":"USA"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
