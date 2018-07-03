import { TestBed, inject } from '@angular/core/testing';

import { HedDataService } from './hed-data.service';

describe('HedDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HedDataService]
    });
  });

  it('should be created', inject([HedDataService], (service: HedDataService) => {
    expect(service).toBeTruthy();
  }));
});
