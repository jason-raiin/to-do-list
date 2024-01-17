import * as Parse from 'parse';

export class Task extends Parse.Object{
  
  constructor(){
    super('Task');
  }


}

Parse.Object.registerSubclass('Task', Task);