import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  nameofch="sdfsdfdsfds afsd";
  constructor() { }

  ngOnInit() {
    this.nameofch="asdasda asfa"
  }
  getdata(d1){
    console.log(d1);
  }
}
