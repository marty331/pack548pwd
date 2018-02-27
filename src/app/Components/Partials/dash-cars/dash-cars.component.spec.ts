import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCarsComponent } from './dash-cars.component';

describe('DashCarsComponent', () => {
  let component: DashCarsComponent;
  let fixture: ComponentFixture<DashCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
