import { Component, OnInit} from '@angular/core';
import { Project } from '../shared/models/project';
import { ProjectService } from '../shared/services/project.service';

@Component({
    selector: 'projects-page',
    templateUrl: './app/projects/projects.component.html',
    styleUrls: ['./app/projects/projects.component.css']
})
export class ProjectsComponent{
    projects: Project[];

    constructor(private service: ProjectService) {}

    ngOnInit(){
        this.service.getProjects().then(projects => this.projects = projects);
    }
}
