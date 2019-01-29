import { TestBed, inject } from '@angular/core/testing';

import { RepositoryListService } from './repository-list.service';

describe('RepositoryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoryListService]
    });
  });

  it('should be created', inject([RepositoryListService], (service: RepositoryListService) => {
    expect(service).toBeTruthy();
  }));
});
