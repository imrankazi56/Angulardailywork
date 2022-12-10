import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  title:string='blog';
  myEvent(evt){
    console.log(evt);
    
  }

  constructor() { }

  ngOnInit() {
  }

  addtoFood(value)
{

}

}
