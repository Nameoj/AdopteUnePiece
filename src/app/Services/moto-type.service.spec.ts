import { TestBed } from '@angular/core/testing';

import { MotoTypeService } from './moto-type.service';

describe('MotoTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotoTypeService = TestBed.get(MotoTypeService);
    expect(service).toBeTruthy();
  });
});
