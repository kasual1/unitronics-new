import { TestBed, inject } from '@angular/core/testing';

import { HedSurveyAuthGuardService } from './hed-survey-auth-guard.service';

describe('HedSurveyAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HedSurveyAuthGuardService]
    });
  });

  it('should be created', inject([HedSurveyAuthGuardService], (service: HedSurveyAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
