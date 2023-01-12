import { TestBed } from '@angular/core/testing';

import { ColorCountService } from './color-count.service';

describe('ColorCountServiceService', () => {
  let service: ColorCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
