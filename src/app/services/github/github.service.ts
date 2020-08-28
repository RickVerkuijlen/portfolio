import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repo } from 'src/app/models/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly baseUrl = environment.GitHubUrl;
  private options = {
    headers: new HttpHeaders({
      'Authorization': 'Token ' + environment.GitHubToken
    })
  }

  private languages = [];

  constructor(private http: HttpClient) { }

  async getAllRepos() {
    let repoes = [];

    return new Promise(resolve => {
      this.http.get(this.baseUrl + "/user/repos", this.options).subscribe((response: any) => {
        response.forEach(async element => {
          if(!element.private) {
            var repo = new Repo;
            repo.id = element.id;
            repo.name = element.name;
            repo.private = element.private;
            repo.html_url = element.html_url;
            repo.languages = await this.getLanguaguesFromRepo(element.languages_url);
            repo.description = element.description;
            repoes.push(repo);
            this.setLanguages(repo.languages);
          }
          
      })
      resolve(repoes);
    })})
  }

  async getLanguaguesFromRepo(repoUrl: string): Promise<string[]> {
    let languages = [];

    await this.http.get<any[]>(repoUrl, this.options).toPromise()
    .then(result => {
      for(let key in result) {
        languages.push(key.toString());
      }
    });

    return languages;
  }

  setLanguages(newLanguages: string[]) {
    newLanguages.forEach(language => {
      if(!this.languages.includes(language)) {
        this.languages.push(language);
      }
    })
  }

  getLanguages() {
    return this.languages;
  }
}
