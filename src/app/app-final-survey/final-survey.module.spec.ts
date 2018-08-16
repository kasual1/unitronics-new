import { FinalSurveyModule } from './final-survey.module';

describe('FinalSurveyModule', () => {
  let finalSurveyModule: FinalSurveyModule;

  beforeEach(() => {
    finalSurveyModule = new FinalSurveyModule();
  });

  it('should create an instance', () => {
    expect(finalSurveyModule).toBeTruthy();
  });
});
