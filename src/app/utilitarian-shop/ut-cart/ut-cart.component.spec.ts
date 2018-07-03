import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtCartComponent } from './ut-cart.component';

describe('UtCartComponent', () => {
  let component: UtCartComponent;
  let fixture: ComponentFixture<UtCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
