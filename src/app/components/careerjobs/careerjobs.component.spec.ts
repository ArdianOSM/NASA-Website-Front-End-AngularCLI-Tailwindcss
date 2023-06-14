import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerjobsComponent } from './careerjobs.component';

describe('CareerjobsComponent', () => {
  let component: CareerjobsComponent;
  let fixture: ComponentFixture<CareerjobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerjobsComponent]
    });
    fixture = TestBed.createComponent(CareerjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
