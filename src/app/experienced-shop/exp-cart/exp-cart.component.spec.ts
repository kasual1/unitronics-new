import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpCartComponent } from './exp-cart.component';

describe('ExpCartComponent', () => {
  let component: ExpCartComponent;
  let fixture: ComponentFixture<ExpCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
