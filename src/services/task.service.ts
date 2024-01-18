import * as Parse from 'parse';

export class Task {

  title: string;
  date: number;
  complete: boolean = false;
  
  constructor(title: string, date: number) {
    this.title = title;
    this.date = date;
  }

  static get defaultTasks() {
    return [
        new Task('Pay the bills', 1705539600000),
        new Task('Wash the dishes', 1705341600000),
        new Task('Feed the dog', 1705413600000),
    ];
  }
}