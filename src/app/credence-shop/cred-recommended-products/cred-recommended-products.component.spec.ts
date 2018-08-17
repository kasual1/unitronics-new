import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredRecommendedProductsComponent } from './cred-recommended-products.component';

describe('CredRecommendedProductsComponent', () => {
  let component: CredRecommendedProductsComponent;
  let fixture: ComponentFixture<CredRecommendedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredRecommendedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredRecommendedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
