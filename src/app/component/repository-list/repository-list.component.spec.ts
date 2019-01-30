import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryListComponent } from './repository-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { HttpClientModule } from '@angular/common/http';

describe('RepositoryListComponent', () => {
  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryListComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        PaginationModule.forRoot()
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Repository List Component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have init result as 'undefined'`, async(() => {
    fixture = TestBed.createComponent(RepositoryListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.result).toBeUndefined();
  }));

});
