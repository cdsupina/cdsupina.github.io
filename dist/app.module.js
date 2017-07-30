"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./home/home.component");
var bio_component_1 = require("./bio/bio.component");
var notes_component_1 = require("./notes/notes.component");
var projects_component_1 = require("./projects/projects.component");
var project_report_component_1 = require("./projects/project-report.component");
var not_found_component_1 = require("./not-found/not-found.component");
var project_service_1 = require("./shared/services/project.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_1.appRouting
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            bio_component_1.BioComponent,
            notes_component_1.NotesComponent,
            projects_component_1.ProjectsComponent,
            project_report_component_1.ProjectReportComponent,
            not_found_component_1.NotFoundComponent
        ],
        providers: [
            project_service_1.ProjectService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map