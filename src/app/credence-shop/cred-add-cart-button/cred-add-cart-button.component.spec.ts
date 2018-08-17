import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredAddCartButtonComponent } from './cred-add-cart-button.component';

describe('CredAddCartButtonComponent', () => {
  let component: CredAddCartButtonComponent;
  let fixture: ComponentFixture<CredAddCartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredAddCartButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredAddCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
