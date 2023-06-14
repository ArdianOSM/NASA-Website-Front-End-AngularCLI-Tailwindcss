import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lheader4Component } from './lheader4.component';

describe('Lheader4Component', () => {
  let component: Lheader4Component;
  let fixture: ComponentFixture<Lheader4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lheader4Component]
    });
    fixture = TestBed.createComponent(Lheader4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
