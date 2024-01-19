import * as Parse from "parse";
import { Injectable } from "@angular/core";
import { TaskList } from "../models/taskList.model";
import { TaskListService } from "./taskList.service";
import { Task } from "../models/task.model";

@Injectable({
  providedIn: 'root'
})
export class User extends Parse.User {

  constructor() {
    super();
  }

  static getCurrent() {
    return User.current() as User;
  }

  static create(username: string, password: string) {
    const user = new User();
    user.setUsername(username);
    user.setPassword(password);
    user.set('taskList', TaskListService.defaultTasks);
    return user;
  }

  get taskList() {
    return this.get('taskList');
  }

  set taskList(taskList: TaskList) {
    this.set('taskList', taskList);
    this.save();
  }

}

Parse.Object.registerSubclass('_User', User);