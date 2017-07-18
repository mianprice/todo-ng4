import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';


const TASKS: Task[] = [
  { id: 11, name: 'ng4 app' },
  { id: 12, name: 'acquisition pipeline app' },
  { id: 13, name: '3D 2048' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService]
})
export class AppComponent implements OnInit {
  constructor(private taskService: TaskService) { }
  title = 'Task Manager';
  tasks: Task[];
  selectedTask: Task;
  onSelect(task: Task): void {
    this.selectedTask = task;
  };
  getTasks(): void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }
  ngOnInit(): void {
    this.getTasks();
  }
}
