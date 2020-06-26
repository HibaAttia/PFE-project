import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployesComponent } from './list-employes.component';

describe('ListEmployesComponent', () => {
  let component: ListEmployesComponent;
  let fixture: ComponentFixture<ListEmployesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmployesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
