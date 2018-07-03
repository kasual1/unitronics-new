import { TestBed, inject } from '@angular/core/testing';

import { ExpAuthGuardService } from './exp-auth-guard.service';

describe('ExpAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpAuthGuardService]
    });
  });

  it('should be created', inject([ExpAuthGuardService], (service: ExpAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
