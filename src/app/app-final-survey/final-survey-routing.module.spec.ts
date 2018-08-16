import { FinalSurveyRoutingModule } from './final-survey-routing.module';

describe('FinalSurveyRoutingModule', () => {
  let finalSurveyRoutingModule: FinalSurveyRoutingModule;

  beforeEach(() => {
    finalSurveyRoutingModule = new FinalSurveyRoutingModule();
  });

  it('should create an instance', () => {
    expect(finalSurveyRoutingModule).toBeTruthy();
  });
});
