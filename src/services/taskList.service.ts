import { Task } from './task.service';

export class TaskList {
  list: Task[];

  constructor(list: Task[]) {
    this.list = list;
    this.sort();
  }

  static get defaultTasks() {
    return new TaskList(Task.defaultTasks);
  }

  addTask(task: Task) {
    this.list.push(task);
    this.sort();
  }

  removeTask(task: Task) {
    this.list.splice(this.list.indexOf(task), 1);
    this.sort();
  }

  completeTask(task: Task) {
    this.list.splice(this.list.indexOf(task), 1);
    task.toggleComplete();
    this.list.push(task);
    this.sort();
  }

  sort() {
    this.list.sort((a, b) => {
      if(a.complete && !b.complete) { return 1; }
      if(b.complete && !a.complete) { return -1; }
      return a.date - b.date;
    });
  }
}