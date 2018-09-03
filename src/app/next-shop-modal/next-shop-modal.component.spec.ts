import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextShopModalComponent } from './next-shop-modal.component';

describe('NextShopModalComponent', () => {
  let component: NextShopModalComponent;
  let fixture: ComponentFixture<NextShopModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextShopModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextShopModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
