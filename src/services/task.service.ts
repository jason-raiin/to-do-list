import * as Parse from 'parse';

export class Task extends Parse.Object{
  
  constructor() {
    super('Task');
    this.set('complete', false);
  }

  static create(title: string, date: number) {
    const task = new Task();
    task.title = title;
    task.date = date;
  }

  get title() {
    return this.get('title');
  }

  set title(title: string) {
    this.set('title', title);
  }

  get date() {
    return this.get('date');
  }

  set date(date: number) {
    this.set('date', date);
  }

  get complete() {
    return this.get('complete');
  }

  toggleComplete() {
    this.set('complete', !this.complete());
    return this.complete;
  }

}

Parse.Object.registerSubclass('Task', Task);