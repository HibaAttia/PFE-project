import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesInternesComponent } from './notes-internes.component';

describe('NotesInternesComponent', () => {
  let component: NotesInternesComponent;
  let fixture: ComponentFixture<NotesInternesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesInternesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesInternesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
