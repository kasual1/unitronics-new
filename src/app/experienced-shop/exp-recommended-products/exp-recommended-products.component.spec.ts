import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpRecommendedProductsComponent } from './exp-recommended-products.component';

describe('ExpRecommendedProductsComponent', () => {
  let component: ExpRecommendedProductsComponent;
  let fixture: ComponentFixture<ExpRecommendedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpRecommendedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpRecommendedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
