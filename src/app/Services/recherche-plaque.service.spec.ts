import { TestBed } from '@angular/core/testing';

import { RecherchePlaqueService } from './recherche-plaque.service';

describe('RecherchePlaqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecherchePlaqueService = TestBed.get(RecherchePlaqueService);
    expect(service).toBeTruthy();
  });
});
