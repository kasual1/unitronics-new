import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredSurveyComponent } from './cred-survey.component';

describe('CredSurveyComponent', () => {
  let component: CredSurveyComponent;
  let fixture: ComponentFixture<CredSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
