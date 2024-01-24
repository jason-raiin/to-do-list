import { Component } from '@angular/core';
import * as Parse from 'parse';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.initializeParse();
  }

  initializeParse() {
    Parse.initialize('todo', 'supersecret');
    (Parse as any).serverURL = 'http://localhost:1337/parse';
    console.log('Parse initialized!');
  }
}
