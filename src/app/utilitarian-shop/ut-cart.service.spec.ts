import { TestBed, inject } from '@angular/core/testing';

import { UtCartService } from './ut-cart.service';

describe('UtCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtCartService]
    });
  });

  it('should be created', inject([UtCartService], (service: UtCartService) => {
    expect(service).toBeTruthy();
  }));
});
