import { DataService } from './../shared/data.service';


import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { Data } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:any[]=[];
  filterStatus:string="";
  filterDate:string="";
  newTodoDate:string="";
  newTodoText:string="";

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
   this.todos=this.dataService.getAllTodos().records;
  }
  
  onCreateTodos(){
    this.todos=this.dataService.addTodo(this.newTodoText, this.newTodoDate).records;
    
  }

  onFilterTodos(): void{
    // filterDate, filterStatus as Strings
    this.todos=this.dataService.getFilteredTodos(this.filterDate, this.filterStatus).records;
  }

  onSortTodos(): void{
    this.todos=this.dataService.getSortTodos().records;
  }

}
