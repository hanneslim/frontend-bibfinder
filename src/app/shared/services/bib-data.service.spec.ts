import { TestBed } from '@angular/core/testing';

import { BibDataService } from './bib-data.service';

describe('BibDataService', () => {
  let service: BibDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
