import { TestBed } from '@angular/core/testing';

import { ScreenMeasureService } from './screen-measure.service';

describe('ScreenMeasureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenMeasureService = TestBed.get(ScreenMeasureService);
    expect(service).toBeTruthy();
  });
});
