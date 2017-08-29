/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaindivComponent } from './maindiv.component';

describe('MaindivComponent', () => {
  let component: MaindivComponent;
  let fixture: ComponentFixture<MaindivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
