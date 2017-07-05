import { Component } from '@angular/core';

export class Task {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Manager';
  task: Task = {
    id: 1,
    name: 'Add tasks to manage'
  };
}
