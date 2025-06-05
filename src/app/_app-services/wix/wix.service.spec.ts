import { TestBed } from '@angular/core/testing';

import { WixService } from './wix.service';

describe('WixService', () => {
  let service: WixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
