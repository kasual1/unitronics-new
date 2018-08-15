import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtProductSurveyComponent } from './ut-product-survey.component';

describe('UtProductSurveyComponent', () => {
  let component: UtProductSurveyComponent;
  let fixture: ComponentFixture<UtProductSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtProductSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtProductSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
