import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrartion-form',
  templateUrl: './registrartion-form.component.html',
  styleUrls: ['./registrartion-form.component.css']
})
export class RegistrartionFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Registration(reg:any){
    console.log(reg);
    
  }

}
