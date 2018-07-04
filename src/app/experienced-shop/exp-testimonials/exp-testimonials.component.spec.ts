import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpTestimonialsComponent } from './exp-testimonials.component';

describe('ExpTestimonialsComponent', () => {
  let component: ExpTestimonialsComponent;
  let fixture: ComponentFixture<ExpTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
