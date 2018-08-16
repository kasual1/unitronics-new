import { CredSurveyModule } from './cred-survey.module';

describe('CredSurveyModule', () => {
  let credSurveyModule: CredSurveyModule;

  beforeEach(() => {
    credSurveyModule = new CredSurveyModule();
  });

  it('should create an instance', () => {
    expect(credSurveyModule).toBeTruthy();
  });
});
