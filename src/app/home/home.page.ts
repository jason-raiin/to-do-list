import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { TaskListService } from 'src/app/services/taskList.service';
import { User } from 'src/app/services/user.service';
import { TaskList } from '../models/taskList.model';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User = User.current() || new User();
  readonly username: string = this.user.getUsername() || '';
  taskList: TaskList = this.user.get('taskList');
  readonly today: number = Date.now();

  constructor(private router: Router, private _taskService: TaskService, private _taskListService: TaskListService) {}

  logOut() {
    User.logOut();
    this.router.navigate(['login']);
  }

  addTask() {
    this.router.navigate(['new']);
  }

  delete(task: Task) {
    const taskList = this.taskList;
    this._taskListService.removeTask(taskList, task);
    
    this.user.taskList = taskList;
    this.user.save();
  }

  complete(task: Task) {
    const taskList = this.taskList;
    this._taskListService.completeTask(taskList, task);

    this.user.taskList = taskList;
    this.user.save();
  }
}
