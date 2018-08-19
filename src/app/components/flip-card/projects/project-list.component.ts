import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { ProjectListService } from '@app/services/project-list.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss'],
  providers: [ ProjectListService ],
})
export class ProjectListComponent implements OnInit {

  isLoading: boolean;
  projects: Array<object>;

  constructor(private projectService: ProjectListService) {
      this.projects = projectService.getProjects();
  }

  ngOnInit() {
    this.isLoading = false;

  }

}