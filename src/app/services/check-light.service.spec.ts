import { TestBed } from '@angular/core/testing';

import { CheckLightService } from './check-light.service';

describe('CheckLightService', () => {
  let service: CheckLightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckLightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
