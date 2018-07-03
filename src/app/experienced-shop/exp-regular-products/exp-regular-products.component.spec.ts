import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpRegularProductsComponent } from './exp-regular-products.component';

describe('ExpRegularProductsComponent', () => {
  let component: ExpRegularProductsComponent;
  let fixture: ComponentFixture<ExpRegularProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpRegularProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpRegularProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
