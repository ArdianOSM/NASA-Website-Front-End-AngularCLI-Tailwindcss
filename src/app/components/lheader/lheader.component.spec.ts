import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LheaderComponent } from './lheader.component';

describe('LheaderComponent', () => {
  let component: LheaderComponent;
  let fixture: ComponentFixture<LheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LheaderComponent]
    });
    fixture = TestBed.createComponent(LheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
