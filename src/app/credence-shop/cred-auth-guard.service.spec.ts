import { TestBed, inject } from '@angular/core/testing';

import { CredAuthGuardService } from './cred-auth-guard.service';

describe('CredAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CredAuthGuardService]
    });
  });

  it('should be created', inject([CredAuthGuardService], (service: CredAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
