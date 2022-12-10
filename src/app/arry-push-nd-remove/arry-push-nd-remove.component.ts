import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arry-push-nd-remove',
  templateUrl: './arry-push-nd-remove.component.html',
  styleUrls: ['./arry-push-nd-remove.component.css']
})
export class ArryPushNdRemoveComponent implements OnInit {

  constructor() { }
userList=[];
  userName:string="enter User Name";

  onClick(prouser){
    if(prouser.value.length>1)

    this.userList.push(prouser.value);
    prouser.value='';
  }
  
  onDelete(deleteMe){
    this.userList.splice(deleteMe,1);
  }

  ngOnInit() {
  }

}
