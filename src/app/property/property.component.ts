import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  title="Blog";
  name="Imran kazi";
  disablebox=true;
  enable(){
this.disablebox=false;
  }

  constructor() { }

  ngOnInit() {
  }

}
