import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homeheader2Component } from './homeheader2.component';

describe('Homeheader2Component', () => {
  let component: Homeheader2Component;
  let fixture: ComponentFixture<Homeheader2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Homeheader2Component]
    });
    fixture = TestBed.createComponent(Homeheader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
