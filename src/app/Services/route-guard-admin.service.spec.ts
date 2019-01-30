import { TestBed } from '@angular/core/testing';

import { RouteGuardAdminService } from './route-guard-admin.service';

describe('RouteGuardAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteGuardAdminService = TestBed.get(RouteGuardAdminService);
    expect(service).toBeTruthy();
  });
});
