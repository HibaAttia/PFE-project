import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceCalendarComponent } from './presence-calendar.component';

describe('PresenceCalendarComponent', () => {
  let component: PresenceCalendarComponent;
  let fixture: ComponentFixture<PresenceCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenceCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenceCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
