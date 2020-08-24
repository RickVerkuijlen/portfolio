import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent, data: {animation: 'home'}},
  {path: "about", component: AboutComponent, data: {animation: 'home'}},
  {path: "projects", component: ProjectsComponent, data: {animation: 'home'}},
  {path: "contact", component: ContactComponent, data: {animation: 'home'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
