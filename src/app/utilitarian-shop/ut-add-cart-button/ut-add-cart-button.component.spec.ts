import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtAddCartButtonComponent } from './ut-add-cart-button.component';

describe('UtAddCartButtonComponent', () => {
  let component: UtAddCartButtonComponent;
  let fixture: ComponentFixture<UtAddCartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtAddCartButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtAddCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
