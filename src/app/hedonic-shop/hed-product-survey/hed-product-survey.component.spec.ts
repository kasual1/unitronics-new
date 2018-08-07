import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedProductSurveyComponent } from './hed-product-survey.component';

describe('HedProductSurveyComponent', () => {
  let component: HedProductSurveyComponent;
  let fixture: ComponentFixture<HedProductSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedProductSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedProductSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
