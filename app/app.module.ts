import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { NotesComponent } from './notes/notes.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectReportComponent} from './projects/project-report.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectService } from './shared/services/project.service';

@NgModule({
    imports: [
        BrowserModule,
        appRouting
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        BioComponent,
        NotesComponent,
        ProjectsComponent,
        ProjectReportComponent,
        NotFoundComponent
    ],
    providers: [
        ProjectService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
