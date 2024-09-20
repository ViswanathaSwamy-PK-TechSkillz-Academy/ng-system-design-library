import { TestBed } from '@angular/core/testing';

import { SvNgSystemDesignService } from './sv-ng-system-design.service';

describe('SvNgSystemDesignService', () => {
  let service: SvNgSystemDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvNgSystemDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
