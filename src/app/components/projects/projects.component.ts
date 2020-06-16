import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import { Repo } from 'src/app/models/repo';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  repositories;
  shownRepositories;
  languages = [];

  constructor(private github: GithubService, public translate: TranslateService) { 
  }

  async ngOnInit() {
    this.repositories = await this.github.getAllRepos();
    this.shownRepositories = this.repositories;
    this.languages = this.github.getLanguages();
  }

  filterProjects(language: string) {
    this.shownRepositories = this.repositories.filter((repo: Repo) => {
      return repo.languages.includes(language);
    })
  }

  resetFilter() {
    this.shownRepositories = this.repositories;
  }

  onChangePage(pageOfItems: Array<Repo>) {
    this.shownRepositories = pageOfItems;
  }
  

}
