import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/services/task.service';
import { User } from 'src/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User = User.current() || new User();
  readonly username: string = this.user.getUsername() || '';
  tasks: Task[] = this.user.get('tasks');

  readonly today: number = Date.now();

  constructor(private router: Router) {}

  logOut() {
    User.logOut();
    this.router.navigate(['login']);
  }

  addTask() {
    this.router.navigate(['new']);
  }

  delete(task: Task) {
    const tasks = this.user.get('tasks') as Task[];
    tasks.splice(tasks.indexOf(task), 1);
    this.user.set('tasks', tasks);
    this.user.save();
  }

  complete(task: Task) {
    const tasks = this.user.get('tasks') as Task[];
    tasks.splice(tasks.indexOf(task), 1);
    task.toggleComplete();
    tasks.push(task);
    this.user.set('tasks', tasks);
    this.user.save();
  }
}
