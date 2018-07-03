import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedCartComponent } from './hed-cart.component';

describe('HedCartComponent', () => {
  let component: HedCartComponent;
  let fixture: ComponentFixture<HedCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
