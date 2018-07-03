import { TestBed, inject } from '@angular/core/testing';

import { ExpSurveyAuthGuardService } from './exp-survey-auth-guard.service';

describe('ExpSurveyAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpSurveyAuthGuardService]
    });
  });

  it('should be created', inject([ExpSurveyAuthGuardService], (service: ExpSurveyAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
