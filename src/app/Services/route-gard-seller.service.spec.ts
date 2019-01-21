import { TestBed } from '@angular/core/testing';

import { RouteGardSellerService } from './route-gard-seller.service';

describe('RouteGardSellerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteGardSellerService = TestBed.get(RouteGardSellerService);
    expect(service).toBeTruthy();
  });
});
