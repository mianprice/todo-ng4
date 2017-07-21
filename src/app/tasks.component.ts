import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './task';
import { TaskService } from './task.service';


const TASKS: Task[] = [
  { id: 11, name: 'ng4 app' },
  { id: 12, name: 'acquisition pipeline app' },
  { id: 13, name: '3D 2048' }
];

@Component({
  selector: 'my-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class TasksComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }
  title = 'Task Manager';
  tasks: Task[];
  selectedTask: Task;
  onSelect(task: Task): void {
    this.selectedTask = task;
  };
  getTasks(): void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTask.id]);
  }
  ngOnInit(): void {
    this.getTasks();
  }
}
