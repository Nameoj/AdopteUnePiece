import { TestBed } from '@angular/core/testing';

import { BuyerService } from './buyer.service';

describe('BuyerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyerService = TestBed.get(BuyerService);
    expect(service).toBeTruthy();
  });
});
