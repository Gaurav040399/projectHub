import { Component } from '@angular/core';

@Component({
  selector: 'app-task-listing',
  templateUrl: './task-listing.component.html',
  styleUrls: ['./task-listing.component.css']
})
export class TaskListingComponent {
  tasks = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1', dueDate:'12/055/2023',priority:"first", status:"false" },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', dueDate:'14/055/2023',priority:"second", status:"true" },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', dueDate:'16/055/2023',priority:"third", status:"false" },
    { id: 4, title: 'Task 4', description: 'Description for Task 4', dueDate:'18/055/2023',priority:"fourth", status:"true" },
  ];
  deleteTask(task: any) {
    console.log('task deleted:', task);
    const taskIndex = this.tasks.indexOf(task);
    // console.log(taskIndex)
    if (taskIndex !== -1) {
    
      this.tasks.splice(taskIndex, 1);
      console.log('task deleted:', task);
    } else {
      console.error('task not found:', task);
    }
  }
  captureValue(buttonValue: any) {
    console.log('Button Value:', buttonValue);
  }
  
}
