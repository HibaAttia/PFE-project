import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutementsComponent } from './recrutements.component';

describe('RecrutementsComponent', () => {
  let component: RecrutementsComponent;
  let fixture: ComponentFixture<RecrutementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecrutementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecrutementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
