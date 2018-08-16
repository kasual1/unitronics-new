import { TestBed, inject } from '@angular/core/testing';

import { CredSurveyAuthGuardService } from './cred-survey-auth-guard.service';

describe('CredSurveyAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CredSurveyAuthGuardService]
    });
  });

  it('should be created', inject([CredSurveyAuthGuardService], (service: CredSurveyAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
