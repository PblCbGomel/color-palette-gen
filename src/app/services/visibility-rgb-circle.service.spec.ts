import { TestBed } from '@angular/core/testing';

import { VisibilityRgbCircleService } from './visibility-rgb-circle.service';

describe('VisibilityRgbCircleService', () => {
  let service: VisibilityRgbCircleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilityRgbCircleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
