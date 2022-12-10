import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  defaultGender: string = 'Female'
  defaultValue: string = 'Angular';
  employee = new Employee();
  submitted: boolean = false;
  genderssss : string;
  genders = [
    {id:'1', value:'Male'},
    {id:'2', value:'Female'}
  ]
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm) {
    this.submitted = true;
    this.employee .course = form.value.course;
    this.employee .username = form.value.userDetails.username;
    this.employee .email = form.value.userDetails.email;
    this.employee.gender = form.value.gender;
    this.employee.dob = form.value.date;
    form.reset();
    form.controls['course'].setValue('Angular');
    form.controls['gender'].setValue('Female');
    console.log(form.controls);
   //this.saveEmployeeData(this.employee);
  }

  saveEmployeeData(emp:Employee) {
   console.log(emp.course);
  }
}
