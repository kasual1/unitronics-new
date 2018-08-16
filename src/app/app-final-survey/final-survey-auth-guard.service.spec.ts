import { TestBed, inject } from '@angular/core/testing';

import { FinalSurveyAuthGuardService } from './final-survey-auth-guard.service';

describe('FinalSurveyAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinalSurveyAuthGuardService]
    });
  });

  it('should be created', inject([FinalSurveyAuthGuardService], (service: FinalSurveyAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
