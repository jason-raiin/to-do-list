import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Parse from 'parse';
import { TaskList } from 'src/services/taskList.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  form = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  constructor(private router: Router) {}

  logIn() {
    const data = this.form.getRawValue();
    Parse.User.logIn(data.username as string, data.password as string).then((result) => {
      this.form.reset();
      this.router.navigate(['/home']);
    }).catch((error) => {
      alert("Invalid credentials!");
    });
  }

  signUp() {
    const data = this.form.getRawValue();
    const user = new Parse.User();
    user.setUsername(data.username as string);
    user.setPassword(data.password as string);
    user.set('tasks', TaskList.defaultTasks);

    user.signUp().then((result) => {
      this.form.reset();
      this.router.navigate(['/home']);
    }).catch((error) => {
      alert("Username is taken!");
    });
  }

}
