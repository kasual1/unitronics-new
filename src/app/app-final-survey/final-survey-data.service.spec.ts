import { TestBed, inject } from '@angular/core/testing';

import { FinalSurveyDataService } from './final-survey-data.service';

describe('FinalSurveyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinalSurveyDataService]
    });
  });

  it('should be created', inject([FinalSurveyDataService], (service: FinalSurveyDataService) => {
    expect(service).toBeTruthy();
  }));
});
