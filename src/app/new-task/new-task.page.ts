import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import * as Parse from 'parse';
import { parseISO } from 'date-fns';
import { TaskListService } from 'src/app/services/taskList.service';
import { User } from '../services/user.service';

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

  constructor(private router: Router, private _taskService: TaskService, private _taskListService: TaskListService) { }


  cancel() {
    this.form.reset();
    this.router.navigate(['home']);
  }

  submit() {
    const user = User.getCurrent();

    const { title, date } = this.form.getRawValue();
    const dateMilliseconds= parseISO(date as string).setHours(0,0,0,0);
    const task = this._taskService.create(title as string, dateMilliseconds);

    const taskList = user.taskList;
    this._taskListService.addTask(taskList, task);
    user.save();
    
    this.form.reset();
    this.router.navigate(['home']);
  }

}
