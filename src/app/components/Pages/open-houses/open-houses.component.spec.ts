import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenHousesComponent } from './open-houses.component';

describe('OpenHousesComponent', () => {
  let component: OpenHousesComponent;
  let fixture: ComponentFixture<OpenHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenHousesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
