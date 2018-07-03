import { TestBed, inject } from '@angular/core/testing';

import { UtDataService } from './ut-data.service';

describe('UtDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtDataService]
    });
  });

  it('should be created', inject([UtDataService], (service: UtDataService) => {
    expect(service).toBeTruthy();
  }));
});
