import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtRegularProductsComponent } from './ut-regular-products.component';

describe('UtRegularProductsComponent', () => {
  let component: UtRegularProductsComponent;
  let fixture: ComponentFixture<UtRegularProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtRegularProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtRegularProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
