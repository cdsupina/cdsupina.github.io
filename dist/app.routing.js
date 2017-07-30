"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var bio_component_1 = require("./bio/bio.component");
var notes_component_1 = require("./notes/notes.component");
var projects_component_1 = require("./projects/projects.component");
var project_report_component_1 = require("./projects/project-report.component");
var not_found_component_1 = require("./not-found/not-found.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'bio', component: bio_component_1.BioComponent },
    { path: 'notes', component: notes_component_1.NotesComponent },
    { path: 'projects', component: projects_component_1.ProjectsComponent },
    { path: 'projects/:projectName', component: project_report_component_1.ProjectReportComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map