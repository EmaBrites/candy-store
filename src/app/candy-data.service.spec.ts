import { TestBed } from '@angular/core/testing';

import { CandyDataService } from './candy-data.service';

describe('CandyDataService', () => {
  let service: CandyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
