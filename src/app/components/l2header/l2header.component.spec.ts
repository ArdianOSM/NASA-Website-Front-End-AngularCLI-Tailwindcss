import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2headerComponent } from './l2header.component';

describe('L2headerComponent', () => {
  let component: L2headerComponent;
  let fixture: ComponentFixture<L2headerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L2headerComponent]
    });
    fixture = TestBed.createComponent(L2headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
