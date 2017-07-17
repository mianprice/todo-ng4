import { Injectable } from '@angular/core';

import { Task } from './task';
import { TASKS } from './mock-tasks';

@Injectable()
export class TaskService {
  getTasks(): Task[] {
    return TASKS;
  } //stub
}
