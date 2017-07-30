import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { NotesComponent } from './notes/notes.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectReportComponent } from './projects/project-report.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'bio', component: BioComponent},
    {path: 'notes', component: NotesComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'projects/:projectName', component: ProjectReportComponent},
    {path: '**', component: NotFoundComponent}
];

export const appRouting = RouterModule.forRoot(appRoutes);
