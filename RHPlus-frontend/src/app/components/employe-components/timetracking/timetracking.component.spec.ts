import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetrackingComponent } from './timetracking.component';

describe('TimetrackingComponent', () => {
  let component: TimetrackingComponent;
  let fixture: ComponentFixture<TimetrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
