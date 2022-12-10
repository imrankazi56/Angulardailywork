import { Component, OnInit } from '@angular/core';

interface countryInterface{
  name:string;
  flag:any;
  population:number;
}

const countryArray:countryInterface[]=[
  {
    name:'America',
    flag:'../..assets/india.png',
    population:123456,
  },
  {
    name:'Rusia',
    flag:'../..assets/russia.png',
    population:987654,
  }
]
@Component({
  selector: 'app-array-comp',
  templateUrl: './array-comp.component.html',
  styleUrls: ['./array-comp.component.css']
})
export class ArrayCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
containtCountryArray=countryArray;

}
