import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpProductSurveyComponent } from './exp-product-survey.component';

describe('ExpProductSurveyComponent', () => {
  let component: ExpProductSurveyComponent;
  let fixture: ComponentFixture<ExpProductSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpProductSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpProductSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
