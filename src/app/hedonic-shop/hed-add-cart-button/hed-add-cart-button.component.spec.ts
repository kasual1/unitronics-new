import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedAddCartButtonComponent } from './hed-add-cart-button.component';

describe('HedAddCartButtonComponent', () => {
  let component: HedAddCartButtonComponent;
  let fixture: ComponentFixture<HedAddCartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedAddCartButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedAddCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
