import { Component } from '@angular/core';
import * as Parse from 'parse';
import { environment } from 'src/environments/environment';

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
    Parse.initialize(environment.PARSE_APP_ID);
    (Parse as any).serverURL = environment.PARSE_SERVER_URL;
    console.log('Parse initialized!');
  }
}
