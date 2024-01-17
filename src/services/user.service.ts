import * as Parse from "parse";
import { Task } from "./task.service";

export class User extends Parse.User {

  constructor() {
    super();
  }
  

  get tasks() {
    return this.get('tasks');
  }

  set tasks(tasks: Task[]) {
    this.set('tasks', tasks);
  }
}