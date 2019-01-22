import { TestBed } from '@angular/core/testing';

import { CommandesService } from './commandes.service';

describe('CommandesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandesService = TestBed.get(CommandesService);
    expect(service).toBeTruthy();
  });
});
