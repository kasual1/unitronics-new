import { TestBed, inject } from '@angular/core/testing';

import { UtAuthGuardService } from './ut-auth-guard.service';

describe('UtAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtAuthGuardService]
    });
  });

  it('should be created', inject([UtAuthGuardService], (service: UtAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
