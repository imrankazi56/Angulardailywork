import { Component } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  data:string;
  passValue(evt){
    const val = evt.target.value;
    this.data=val;
  }
 fruits=[];
 addFruit(item){
  this.fruits.push(item);
 }
 result:string;
 concatString(result){
this.result + this.fruits;
 }
}




 
  