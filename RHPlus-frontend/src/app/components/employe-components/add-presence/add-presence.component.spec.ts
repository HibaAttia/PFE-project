import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPresenceComponent } from './add-presence.component';

describe('AddPresenceComponent', () => {
  let component: AddPresenceComponent;
  let fixture: ComponentFixture<AddPresenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPresenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
