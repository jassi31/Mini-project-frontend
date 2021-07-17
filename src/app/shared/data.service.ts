import { Injectable } from '@angular/core';
import {Todo} from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos:Todo[]=[
    new Todo('jassi is a good boy!',true),
    new Todo('jassi is a good boy and he sure is')
  ]

  constructor() { }
  
  getAllTodos(){
    // Call API here and Parse it.
    // let todorecordObj = JSON.parse(makeAPICall());
    let todorecordObj = { records : [
      { text:   "Wake up at 5 early at morning.",
        completed: false,
        completiondate: "2021-07-17",
        recordId: "001"},
        { text:   "Wake up at 5 early at morning.",
        completed: true,
        completiondate: "2021-07-15",
        recordId: "002"},
          { text:   "Wake up at 5 early at morning.",
          completed: true,
          completiondate: "2021-07-16",
          recordId: "003"},
            { text:   "Wake up at 5 early at morning.",
            completed: false,
            completiondate: "2021-07-17",
            recordId: "004"}
    ]};
    return todorecordObj;
  }

  addTodo( newTodoDate:string, newTodoText:string){
    // Call API to create Todo here 
    return  this.getAllTodos();

  }

  updateTodo(index:number , updatedTodo:Todo){
    this.todos[index]=updatedTodo;
  }

  deleteTodo(index:number){
    this.todos.splice(index,1);
  }

  getFilteredTodos( filterDate:string, filterStatus:string){
    // Call API here and Parse it.
    // let todorecordObj = JSON.parse(makeAPICall());
    let todorecordObj = { records : [
      { text:   "Wake up at 5 early at morning.",
        completed: false,
        date: "2021-07-17"},
            { text:   "Wake up at 5 early at morning.",
            completed: false,
              date: "2021-07-17"}
    ]};
    return todorecordObj;
  }

  getSortTodos( ) {
     // Call API here and Parse it.
    // let todorecordObj = JSON.parse(makeAPICall());
    let todorecordObj = { records : [
        { text:   "Wake up at 5 early at morning.",
        completed: true,
          date: "2021-07-15"},
          { text:   "Wake up at 5 early at morning.",
          completed: true,
            date: "2021-07-16"},
            { text:   "Wake up at 5 early at morning.",
            completed: false,
              date: "2021-07-17"},
            { text:   "Wake up at 5 early at morning.",
            completed: false,
            date: "2021-07-17"},  
    ]};
    return todorecordObj;
  }

}
