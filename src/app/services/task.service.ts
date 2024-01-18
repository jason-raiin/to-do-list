import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  constructor() {}

  static get defaultTasks() {
    return [
        new Task('Pay the bills', 1705539600000),
        new Task('Wash the dishes', 1705341600000),
        new Task('Feed the dog', 1705413600000),
    ];
  }

  toggleComplete(task: Task) {
    task.complete = !task.complete;
  }

  create(title: string, date: number) {
    return new Task(title, date);
  }
}