import { Component } from '@angular/core';
import * as Parse from 'parse';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  readonly username: string = Parse.User.current()?.getUsername() || '';
  readonly today: number = Date.now();

  constructor() {}

}
