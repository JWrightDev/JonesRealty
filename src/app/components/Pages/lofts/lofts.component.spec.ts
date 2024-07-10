import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoftsComponent } from './lofts.component';

describe('LoftsComponent', () => {
  let component: LoftsComponent;
  let fixture: ComponentFixture<LoftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
