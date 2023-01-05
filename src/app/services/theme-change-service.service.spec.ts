import { TestBed } from '@angular/core/testing';

import { ThemeChangeServiceService } from './theme-change-service.service';

describe('ThemeChangeServiceService', () => {
  let service: ThemeChangeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeChangeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
