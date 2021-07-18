import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }
  
  getAllTodos(){
    // Call API here and Parse it.
    // let todorecordObj = JSON.parse(makeAPICall());
    let todorecordObj = { records : [
      { text:   "Wake up at 5 early at morning.",
        completed: false,
        completiondate: "2021-07-17",
        recordid: "001"},
        { text:   "Wake up at 5 early at morning.",
        completed: true,
        completiondate: "2021-07-15",
        recordid: "002"},
          { text:   "Wake up at 5 early at morning.",
          completed: true,
          completiondate: "2021-07-16",
          recordid: "003"},
            { text:   "Wake up at 5 early at morning.",
            completed: false,
            completiondate: "2021-07-17",
            recordid: "004"}
    ]};
    return todorecordObj;
  }

  addTodo( newTodoDate:string, newTodoText:string){
    // Call API to create Todo here 
    return  this.getAllTodos();

  }

  updateTodo(){
  }

  deleteTodo(index:number){
  }

  getFilteredTodos( filterDate:string, filterStatus:string){
    // Call API here and Parse it.
    // let todorecordObj = JSON.parse(makeAPICall());
    let todorecordObj = { records : [
      { text:   "Wake up at 5 early at morning.",
        completed: false,
        date: "2021-07-17",
        recordid: "004"},
            { text:   "Wake up at 5 early at morning.",
            completed: false,
              date: "2021-07-17",
              recordid: "003"}
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
