import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredProductSurveyComponent } from './cred-product-survey.component';

describe('CredProductSurveyComponent', () => {
  let component: CredProductSurveyComponent;
  let fixture: ComponentFixture<CredProductSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredProductSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredProductSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
