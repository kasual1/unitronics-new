import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtSurveyComponent } from './ut-survey.component';

describe('UtSurveyComponent', () => {
  let component: UtSurveyComponent;
  let fixture: ComponentFixture<UtSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
