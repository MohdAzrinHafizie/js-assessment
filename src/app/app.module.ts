import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RepositoryListComponent } from './component/repository-list/repository-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
