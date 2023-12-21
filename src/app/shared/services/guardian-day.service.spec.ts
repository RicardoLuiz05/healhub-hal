import { TestBed } from '@angular/core/testing';

import { GuardianDayService } from './guardian-day.service';

describe('GuardianDayService', () => {
  let service: GuardianDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardianDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
