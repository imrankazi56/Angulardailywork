import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
title:string="Wel Come to My channel";
title1:number=1234567;
title2:string="";
myFunction(){
  this.title2="This is template reference variable Calling  ";
}
}
