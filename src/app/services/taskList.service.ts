import { Injectable } from '@angular/core';
import { TaskList } from '../models/taskList.model';
import { TaskService } from './task.service';
import { Task } from '../models/task.model';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private _taskService: TaskService) {}

  static get defaultTasks() {
    return new TaskList(TaskService.defaultTasks);
  }

  addTask(taskList: TaskList, task: Task) {
    taskList.list.push(task);
    this.sort(taskList);
  }

  removeTask(taskList: TaskList, task: Task) {
    taskList.list.splice(taskList.list.indexOf(task), 1);
    this.sort(taskList);
  }

  completeTask(taskList: TaskList, task: Task) {
    taskList.list.splice(taskList.list.indexOf(task), 1);
    this._taskService.toggleComplete(task);
    taskList.list.push(task);
    this.sort(taskList);
  }

  sort(taskList: TaskList) {
    taskList.list.sort((a, b) => {
      if(a.complete && !b.complete) { return 1; }
      if(b.complete && !a.complete) { return -1; }
      return a.date - b.date;
    });
  }
}