/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestasycComponent } from './testasyc.component';

describe('TestasycComponent', () => {
  let component: TestasycComponent;
  let fixture: ComponentFixture<TestasycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestasycComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestasycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
