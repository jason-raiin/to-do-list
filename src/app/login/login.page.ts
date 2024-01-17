import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Parse from 'parse';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  username: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.username = '';
    this.password = '';
    this.error = false;
  }

  logIn() {
    Parse.User.logIn(this.username, this.password).then((result) => {
      this.router.navigate(['/home']);
    }).catch((error) => {
      alert("Invalid credentials!");
    });
  }

  signUp() {
    const user = new Parse.User();
    user.set('username', this.username);
    user.set('password', this.password);

    user.signUp().then((result) => {
      this.clear();
      this.router.navigate(['/home']);
    }).catch((error) => {
      this.error = true;
      alert("Username is taken!");
    });
  }

  clear() {
    this.username = '';
    this.password = '';
    this.error = false;
  }

}
