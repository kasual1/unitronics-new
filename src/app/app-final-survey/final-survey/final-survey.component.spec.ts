import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSurveyComponent } from './final-survey.component';

describe('FinalSurveyComponent', () => {
  let component: FinalSurveyComponent;
  let fixture: ComponentFixture<FinalSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
