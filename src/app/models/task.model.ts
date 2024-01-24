
export class Task {

  title: string;
  date: number;
  complete: boolean = false;

  constructor(title: string, date: number) {
    this.title = title;
    this.date = date;
  }

}