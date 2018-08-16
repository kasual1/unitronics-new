import { TestBed, inject } from '@angular/core/testing';

import { CredCartService } from './cred-cart.service';

describe('CredCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CredCartService]
    });
  });

  it('should be created', inject([CredCartService], (service: CredCartService) => {
    expect(service).toBeTruthy();
  }));
});
