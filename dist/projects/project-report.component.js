"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var project_service_1 = require("../shared/services/project.service");
var ProjectReportComponent = (function () {
    function ProjectReportComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    ProjectReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        var projectName = this.route.snapshot.params['projectName'];
        this.service.getProject(projectName).then(function (project) { return _this.project = project; });
    };
    return ProjectReportComponent;
}());
ProjectReportComponent = __decorate([
    core_1.Component({
        templateUrl: './app/projects/project-report.component.html',
        styleUrls: ['./app/projects/project-report.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, project_service_1.ProjectService])
], ProjectReportComponent);
exports.ProjectReportComponent = ProjectReportComponent;
//# sourceMappingURL=project-report.component.js.map