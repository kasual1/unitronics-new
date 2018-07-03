import { TestBed, inject } from '@angular/core/testing';

import { UtSurveyAuthGuardService } from './ut-survey-auth-guard.service';

describe('UtSurveyAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtSurveyAuthGuardService]
    });
  });

  it('should be created', inject([UtSurveyAuthGuardService], (service: UtSurveyAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
