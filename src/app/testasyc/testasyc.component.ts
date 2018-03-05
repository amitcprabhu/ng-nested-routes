import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx' 

@Component({
  selector: 'app-testasyc',
  template: `<ul>
  <li *ngFor="let item of items | async">
  {{item}}
  </li>
</ul>
  `,
  styleUrls: ['./testasyc.component.css']
})
export class TestasycComponent implements OnInit {

  public items;

  constructor() { 
    this.items = Observable.of([1, 2, 3]);
  }

  ngOnInit() {
  }

}
