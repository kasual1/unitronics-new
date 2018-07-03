import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedTestimonialsComponent } from './hed-testimonials.component';

describe('HedTestimonialsComponent', () => {
  let component: HedTestimonialsComponent;
  let fixture: ComponentFixture<HedTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
