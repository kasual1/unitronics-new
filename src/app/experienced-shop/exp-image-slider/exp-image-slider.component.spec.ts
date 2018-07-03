import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpImageSliderComponent } from './exp-image-slider.component';

describe('ExpImageSliderComponent', () => {
  let component: ExpImageSliderComponent;
  let fixture: ComponentFixture<ExpImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
