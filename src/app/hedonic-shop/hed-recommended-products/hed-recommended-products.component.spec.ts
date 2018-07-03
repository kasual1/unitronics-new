import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedRecommendedProductsComponent } from './hed-recommended-products.component';

describe('HedRecommendedProductsComponent', () => {
  let component: HedRecommendedProductsComponent;
  let fixture: ComponentFixture<HedRecommendedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedRecommendedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedRecommendedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
