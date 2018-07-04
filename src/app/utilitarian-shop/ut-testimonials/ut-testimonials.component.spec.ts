import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtTestimonialsComponent } from './ut-testimonials.component';

describe('UtTestimonialsComponent', () => {
  let component: UtTestimonialsComponent;
  let fixture: ComponentFixture<UtTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
