import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lheader3Component } from './lheader3.component';

describe('Lheader3Component', () => {
  let component: Lheader3Component;
  let fixture: ComponentFixture<Lheader3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lheader3Component]
    });
    fixture = TestBed.createComponent(Lheader3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
