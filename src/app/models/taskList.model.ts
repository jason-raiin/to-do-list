import { Task } from "./task.model";

export class TaskList {

  list: Task[];

  constructor(list: Task[]) {
    this.list = list;
  }

}