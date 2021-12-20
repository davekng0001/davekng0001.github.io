import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: '',component: HomeAboutComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsComponent}
];

@NgModule({
  imports: 
    [RouterModule.forRoot(routes)],

  exports:[RouterModule]
})

export class AppRoutingModule { }
