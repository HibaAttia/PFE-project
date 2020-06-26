import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanCongesComponent } from './bilan-conges.component';

describe('BilanCongesComponent', () => {
  let component: BilanCongesComponent;
  let fixture: ComponentFixture<BilanCongesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilanCongesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilanCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
