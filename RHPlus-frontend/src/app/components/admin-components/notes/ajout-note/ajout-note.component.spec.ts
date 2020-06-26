import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutNoteComponent } from './ajout-note.component';

describe('AjoutNoteComponent', () => {
  let component: AjoutNoteComponent;
  let fixture: ComponentFixture<AjoutNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
