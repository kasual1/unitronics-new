import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedRegularProductsComponent } from './hed-regular-products.component';

describe('HedRegularProductsComponent', () => {
  let component: HedRegularProductsComponent;
  let fixture: ComponentFixture<HedRegularProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedRegularProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedRegularProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
