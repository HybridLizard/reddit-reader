import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ReaderApiService } from './reader-api.service';

describe('ReaderApiService', () => {
  let service: ReaderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ReaderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
