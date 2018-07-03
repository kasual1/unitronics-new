import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpAddCartButtonComponent } from './exp-add-cart-button.component';

describe('ExpAddCartButtonComponent', () => {
  let component: ExpAddCartButtonComponent;
  let fixture: ComponentFixture<ExpAddCartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpAddCartButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpAddCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
