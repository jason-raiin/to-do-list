import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../services/user/user.service';

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
    const { username, password } = this.form.getRawValue();
    User.logIn(username as string, password as string).then((result) => {
      this.form.reset();
      this.router.navigate(['/home']);
    }).catch((error) => {
      alert("Invalid credentials!");
    });
  }

  signUp() {
    const { username, password } = this.form.getRawValue();
    const user = User.create(username as string, password as string);

    user.signUp().then((result) => {
      this.form.reset();
      this.router.navigate(['/home']);
    }).catch((error) => {
      alert("Username is taken!");
    });
  }

}
