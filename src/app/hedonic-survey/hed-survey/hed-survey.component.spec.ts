import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedSurveyComponent } from './hed-survey.component';

describe('HedSurveyComponent', () => {
  let component: HedSurveyComponent;
  let fixture: ComponentFixture<HedSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
