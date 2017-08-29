/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterdivComponent } from './footerdiv.component';

describe('FooterdivComponent', () => {
  let component: FooterdivComponent;
  let fixture: ComponentFixture<FooterdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
