import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceAdminComponent } from './presence-admin.component';

describe('PresenceAdminComponent', () => {
  let component: PresenceAdminComponent;
  let fixture: ComponentFixture<PresenceAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenceAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
