import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  repositories;

  constructor(private github: GithubService) { 
  }

  async ngOnInit(): Promise<void> {
    this.repositories = await this.github.getAllRepos();
  }

}
