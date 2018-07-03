import { TestBed, inject } from '@angular/core/testing';

import { HedCartService } from './hed-cart.service';

describe('HedCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HedCartService]
    });
  });

  it('should be created', inject([HedCartService], (service: HedCartService) => {
    expect(service).toBeTruthy();
  }));
});
