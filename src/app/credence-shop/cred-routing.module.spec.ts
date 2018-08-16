import { CredRoutingModule } from './cred-routing.module';

describe('CredRoutingModule', () => {
  let credRoutingModule: CredRoutingModule;

  beforeEach(() => {
    credRoutingModule = new CredRoutingModule();
  });

  it('should create an instance', () => {
    expect(credRoutingModule).toBeTruthy();
  });
});
