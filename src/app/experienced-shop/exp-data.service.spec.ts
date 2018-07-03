import { TestBed, inject } from '@angular/core/testing';

import { ExpDataService } from './exp-data.service';

describe('ExpDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpDataService]
    });
  });

  it('should be created', inject([ExpDataService], (service: ExpDataService) => {
    expect(service).toBeTruthy();
  }));
});
