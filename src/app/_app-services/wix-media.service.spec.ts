import { TestBed } from '@angular/core/testing';

import { WixMediaService } from './wix-media.service';

describe('WixMediaService', () => {
  let service: WixMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WixMediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
