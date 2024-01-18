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
}
