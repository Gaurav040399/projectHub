import { Component } from '@angular/core';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.css']
})
export class ProjectListingComponent {
  projects = [
    { id: 1, name: 'Project 1', description: 'Description for Project 1', startDate: '12/05/2023', endDate: '15/06/2023'},
    { id: 2, name: 'Project 2', description: 'Description for Project 2', startDate: '13/05/2023', endDate: '17/06/2023'},
    { id: 3, name: 'Project 3', description: 'Description for Project 3', startDate: '14/05/2023', endDate: '18/06/2023'},
    { id: 4, name: 'Project 4', description: 'Description for Project 4', startDate: '16/05/2023', endDate: '20/06/2023'},
    
  ];
  deleteProject(project: any) {
    console.log('Project deleted:', project);
    const projectIndex = this.projects.indexOf(project);
    console.log(projectIndex)
    if (projectIndex !== -1) {
    
      this.projects.splice(projectIndex, 1);
      console.log('Project deleted:', project);
    } else {
      console.error('Project not found:', project);
    }
  }
}
