import { TestBed, inject } from '@angular/core/testing';

import { HedAuthGuardService } from './hed-auth-guard.service';

describe('HedAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HedAuthGuardService]
    });
  });

  it('should be created', inject([HedAuthGuardService], (service: HedAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
