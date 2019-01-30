import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

import { RepositoryListService } from './repository-list.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {

  public result: any = undefined;
  public formSearch: FormGroup;

  public paging = {
    totalItems: 0,
    maxSize: 5,
    currentPage: 1,
    pageTotal: 0
  };

  public searching: any;
  public request = {
    loading: false,
    success: false,
    error: false
  };

  constructor(
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    private repositoryListService: RepositoryListService
  ) { }

  ngOnInit() {

    this.formSearch = this.formBuilder.group({
      query: ['']
    });

    const query: any = undefined;
    this.searchQuery(query);

    this.formSearch.controls.query.valueChanges.subscribe(value => {
      if (value.length > 2) {
        if (this.searching) {
          this.searching.unsubscribe();
          this.searchQuery(value);
        }
      }
    });

  }

  searchQuery(query) {

    this.request.loading = true;
    this.request.error = false;
    this.request.success = true;
    this.result = undefined;

    const param = {
      query: query,
      page: this.paging.currentPage
    };

    this.searching = this.repositoryListService.getList(param).subscribe(res => {

      this.result = res;
      this.paging.totalItems = res.total_count;
      this.request.loading = false;
      this.request.error = false;
      this.request.success = true;

    },
    (err) => {

      if (err) {
        this.request.loading = false;
        this.request.error = true;
        this.request.success = false;
      }

    });

  }

  safeUrl(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  pageChanged(e) {
    this.paging.currentPage = e.page;
    this.searchQuery(this.formSearch.controls.query.value);
  }

}
