import { TestBed } from '@angular/core/testing';

import { User } from './user.service';

describe('UserService', () => {
  let service: User;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(User);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
