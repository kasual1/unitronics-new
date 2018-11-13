import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLimitModalComponent } from './cart-limit-modal.component';

describe('CartLimitModalComponent', () => {
  let component: CartLimitModalComponent;
  let fixture: ComponentFixture<CartLimitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartLimitModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartLimitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
