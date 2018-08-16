import { CredModule } from './cred.module';

describe('CredModule', () => {
  let credModule: CredModule;

  beforeEach(() => {
    credModule = new CredModule();
  });

  it('should create an instance', () => {
    expect(credModule).toBeTruthy();
  });
});
