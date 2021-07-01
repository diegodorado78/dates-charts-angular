import { TestBed } from '@angular/core/testing';

import { BoquillaService } from './boquilla.service';

describe('BoquillaService', () => {
  let service: BoquillaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoquillaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
