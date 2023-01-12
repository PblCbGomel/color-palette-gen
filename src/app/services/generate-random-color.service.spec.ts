import { TestBed } from '@angular/core/testing';

import { GenerateRandomColorService } from './generate-random-color.service';

describe('GenerateRandomColorService', () => {
  let service: GenerateRandomColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateRandomColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
