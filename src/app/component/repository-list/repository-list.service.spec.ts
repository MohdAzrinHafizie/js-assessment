import { TestBed, inject } from '@angular/core/testing';

import { RepositoryListService } from './repository-list.service';
import { HttpClientModule } from '@angular/common/http';

describe('RepositoryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoryListService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([RepositoryListService], (service: RepositoryListService) => {
    expect(service).toBeTruthy();
  }));
});
