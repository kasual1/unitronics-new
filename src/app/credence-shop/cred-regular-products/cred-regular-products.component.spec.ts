import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredRegularProductsComponent } from './cred-regular-products.component';

describe('CredRegularProductsComponent', () => {
  let component: CredRegularProductsComponent;
  let fixture: ComponentFixture<CredRegularProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredRegularProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredRegularProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
