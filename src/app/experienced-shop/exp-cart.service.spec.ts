import { TestBed, inject } from '@angular/core/testing';

import { ExpCartService } from './exp-cart.service';

describe('ExpCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpCartService]
    });
  });

  it('should be created', inject([ExpCartService], (service: ExpCartService) => {
    expect(service).toBeTruthy();
  }));
});
