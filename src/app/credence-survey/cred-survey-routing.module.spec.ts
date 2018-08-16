import { CredSurveyRoutingModule } from './cred-survey-routing.module';

describe('CredSurveyRoutingModule', () => {
  let credSurveyRoutingModule: CredSurveyRoutingModule;

  beforeEach(() => {
    credSurveyRoutingModule = new CredSurveyRoutingModule();
  });

  it('should create an instance', () => {
    expect(credSurveyRoutingModule).toBeTruthy();
  });
});
