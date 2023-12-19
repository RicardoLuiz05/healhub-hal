import { TestBed } from '@angular/core/testing';

import { GuardianUserService } from './guardian-user.service';

describe('GuardianUserService', () => {
  let service: GuardianUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardianUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
