import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incre-decrement',
  templateUrl: './incre-decrement.component.html',
  styleUrls: ['./incre-decrement.component.css']
})
export class IncreDecrementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  qty:number=1;
}
