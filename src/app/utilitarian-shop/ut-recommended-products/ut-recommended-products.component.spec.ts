import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtRecommendedProductsComponent } from './ut-recommended-products.component';

describe('UtRecommendedProductsComponent', () => {
  let component: UtRecommendedProductsComponent;
  let fixture: ComponentFixture<UtRecommendedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtRecommendedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtRecommendedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
