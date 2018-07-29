import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerDashboardComponent } from './tracker-dashboard.component';

describe('TrackerDashboardComponent', () => {
  let component: TrackerDashboardComponent;
  let fixture: ComponentFixture<TrackerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
