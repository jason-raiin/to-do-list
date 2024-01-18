import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/services/task.service';
import * as Parse from 'parse';

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
    const { title, date } = this.form.getRawValue();
    const task = new Task(title as string, parseInt(date as string));
    const tasks = Parse.User.current()?.get('tasks') as Task[];
    tasks.push(task);
    Parse.User.current()?.set('tasks',tasks);
    this.router.navigate(['home']);
  }

}
