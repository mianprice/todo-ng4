import { Component } from '@angular/core';
import { Task } from './task';

const TASKS: Task[] = [
  { id: 11, name: 'ng4 app' },
  { id: 12, name: 'acquisition pipeline app' },
  { id: 13, name: '3D 2048' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Manager';
  tasks = TASKS;
  selectedTask: Task;
  onSelect(task: Task): void {
    this.selectedTask = task;
  };
}
