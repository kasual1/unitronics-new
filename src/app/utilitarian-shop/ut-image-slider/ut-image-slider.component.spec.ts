import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtImageSliderComponent } from './ut-image-slider.component';

describe('UtImageSliderComponent', () => {
  let component: UtImageSliderComponent;
  let fixture: ComponentFixture<UtImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
