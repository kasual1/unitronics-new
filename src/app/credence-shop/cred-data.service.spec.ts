import { TestBed, inject } from '@angular/core/testing';

import { CredDataService } from './cred-data.service';

describe('CredDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CredDataService]
    });
  });

  it('should be created', inject([CredDataService], (service: CredDataService) => {
    expect(service).toBeTruthy();
  }));
});
