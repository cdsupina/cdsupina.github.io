import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../shared/models/project';
import { ProjectService } from '../shared/services/project.service';
import { NgSwitch } from '@angular/common';

@Component({
    templateUrl: './app/projects/project-report.component.html',
    styleUrls: ['./app/projects/project-report.component.css']
})

export class ProjectReportComponent implements OnInit{
    project: Project;

    constructor(private route: ActivatedRoute, private service: ProjectService){}

    ngOnInit(){
        let projectName = this.route.snapshot.params['projectName'];
        this.service.getProject(projectName).then(project => this.project = project);
    }
}
