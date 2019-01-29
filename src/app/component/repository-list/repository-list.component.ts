import { Component, OnInit } from '@angular/core';

// import { RepositoryListService } from './repository-list.service'
import { RepositoryListService } from './repository-list.service'
@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {

  result:any = undefined

  constructor(
    private repositoryListService: RepositoryListService
  ) { }

  ngOnInit() {
    let query = undefined
    this.repositoryListService.getList(query).subscribe(res => {
      console.log(res)
      this.result = res
    })
  }

}
