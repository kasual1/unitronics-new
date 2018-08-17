import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredTestimonialsComponent } from './cred-testimonials.component';

describe('CredTestimonialsComponent', () => {
  let component: CredTestimonialsComponent;
  let fixture: ComponentFixture<CredTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
