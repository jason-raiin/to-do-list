import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/services/task.service';
import * as Parse from 'parse';
import { parseISO } from 'date-fns';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage {
  form = new FormGroup({
    title: new FormControl<string>('', [Validators.required]),
    date: new FormControl<string>('', [Validators.required]),
  });

  constructor(private router: Router) { }


  cancel() {
    this.router.navigate(['home']);
  }

  submit() {
    const user = Parse.User.current() as Parse.User;

    const { title, date } = this.form.getRawValue();
    const dateMilliseconds= parseISO(date as string).getTime();
    const task = new Task(title as string, dateMilliseconds);

    const tasks = user.get('tasks') as Task[];
    tasks.push(task);
    user.set('tasks',tasks);
    user.save();

    this.router.navigate(['home']);
  }

}
