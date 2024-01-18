import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TaskListService } from 'src/app/services/taskList.service';
import { User } from 'src/app/services/user.service';
import { TaskList } from '../models/taskList.model';
import { Task } from '../models/task.model';
import { Animation, createAnimation } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User = User.getCurrent();
  username: string = this.user.getUsername() as string;
  taskList: TaskList = this.user.taskList;
  readonly today: number = Date.now();

  constructor(private router: Router, private _taskListService: TaskListService) {}

  ionViewWillEnter() {
    this.user = User.getCurrent();
    this.username = this.user.getUsername() as string;
    this.taskList = this.user.taskList;
  }

  logOut() {
    User.logOut();
    this.user = User.create('', '');
    this.router.navigate(['login']);
  }

  addTask() {
    this.router.navigate(['new']);
  }

  delete(task: Task, id: number) {
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
