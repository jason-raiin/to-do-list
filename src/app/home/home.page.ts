import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Parse from 'parse';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  readonly username: string = Parse.User.current()?.getUsername() || '';
  readonly today: number = Date.now();

  constructor(private router: Router) {}

  logOut() {
    Parse.User.logOut();
    this.router.navigate(['login']);
  }
}
