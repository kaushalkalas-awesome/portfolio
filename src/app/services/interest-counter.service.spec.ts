import { TestBed } from '@angular/core/testing';

import { InterestCounterService } from './interest-counter.service';

describe('InterestCounterService', () => {
  let service: InterestCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
