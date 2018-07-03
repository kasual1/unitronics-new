import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedImageSliderComponent } from './hed-image-slider.component';

describe('HedImageSliderComponent', () => {
  let component: HedImageSliderComponent;
  let fixture: ComponentFixture<HedImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
