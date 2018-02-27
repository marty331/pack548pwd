import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashResultsComponent } from './dash-results.component';

describe('DashResultsComponent', () => {
  let component: DashResultsComponent;
  let fixture: ComponentFixture<DashResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
