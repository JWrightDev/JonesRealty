import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StjohnsComponent } from './stjohns.component';

describe('StjohnsComponent', () => {
  let component: StjohnsComponent;
  let fixture: ComponentFixture<StjohnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StjohnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StjohnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
