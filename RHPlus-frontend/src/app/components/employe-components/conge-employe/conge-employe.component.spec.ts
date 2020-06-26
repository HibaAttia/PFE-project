import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeEmployeComponent } from './conge-employe.component';

describe('CongeEmployeComponent', () => {
  let component: CongeEmployeComponent;
  let fixture: ComponentFixture<CongeEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
