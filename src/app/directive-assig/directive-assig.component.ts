import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-assig',
  templateUrl: './directive-assig.component.html',
  styleUrls: ['./directive-assig.component.css']
})
export class DirectiveAssigComponent implements OnInit {

  showSecret = false;
log = [];
  constructor() { }

  ngOnInit() {
  }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1) ;
  }
  }