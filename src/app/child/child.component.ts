import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childname="";
  @Output() selectData=new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }
  clickData(){
    this.selectData.emit("hi all");
  }
}
