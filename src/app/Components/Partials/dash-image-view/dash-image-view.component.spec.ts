import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashImageViewComponent } from './dash-image-view.component';

describe('DashImageViewComponent', () => {
  let component: DashImageViewComponent;
  let fixture: ComponentFixture<DashImageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashImageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
