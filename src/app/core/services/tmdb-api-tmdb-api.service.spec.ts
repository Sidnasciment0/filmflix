import { TestBed } from '@angular/core/testing';

import { TmdbApiTmdbApiService } from './tmdb-api-tmdb-api.service';

describe('TmdbApiTmdbApiService', () => {
  let service: TmdbApiTmdbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdbApiTmdbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
