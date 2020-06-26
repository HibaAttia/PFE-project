import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeRequestComponent } from './conge-request.component';

describe('CongeRequestComponent', () => {
  let component: CongeRequestComponent;
  let fixture: ComponentFixture<CongeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
