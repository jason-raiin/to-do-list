import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TaskListService } from 'src/app/services/taskList/taskList.service';
import { User } from 'src/app/services/user/user.service';
import { TaskList } from '../../models/taskList.model';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User = User.getCurrent();
  username: string = this.user?.getUsername() as string;
  taskList: TaskList = this.user?.taskList;
  readonly today: number = new Date().setHours(0, 0, 0, 0);

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

  delete(task: Task) {
    this._taskListService.removeTask(this.taskList, task);
    
    this.user.save();
  }

  complete(task: Task) {
    this._taskListService.completeTask(this.taskList, task);

    this.user.save();
  }
}
