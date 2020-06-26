import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/modals/todo';
import { TodoService } from 'src/app/services/todo.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AjoutNoteComponent } from '../../notes/ajout-note/ajout-note.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  isPopupOpened = false;
  todo : Todo = new Todo();
  editing: boolean = false;
  editingTodo: Todo = new Todo();
  todos:Todo[];

  constructor(private dialog: MatDialog, private todoService:TodoService,private router:Router) { }

  ngOnInit() {
    this.getAllTodos();
  }

  onAddTodo() {
    this.openTodoDialog(null);
  }

  openTodoDialog(data?:any){
    const dialogRef = this.dialog.open(AddTodoComponent,{
      disableClose : true,
      autoFocus : true ,
      width : "50%",
      data : data
    });
    
    dialogRef.afterClosed().subscribe(result =>{
      if (result && data == null){
        this.todos.push(result);
      }}
   ); 
  }

  getAllTodos(){
    this.todoService.getTodos()
    .subscribe(
      response => {
        this.todos = response; }
     );
  }

  deleteTodo(todo:Todo): void {
    this.todoService.deleteTodo(todo.id)
      .subscribe( data => {
        this.todos = this.todos.filter(u => u !== todo);
      })
    
  }

  updateTodo(todo){  
    this.openTodoDialog(todo);
    //this.todoService.setter(todo);
    //this.router.navigate(['/updateTodo']);

  }
  

  toggleCompleted(todoData: Todo): void {
    todoData.completed = !todoData.completed;
    this.todoService.comletedTodo(todoData.id);
  }

  /*editTodo(todoData: Todo): void {
    this.editing = true;
    
  }*/

  

  completedTodo (id:number){
    this.todoService.comletedTodo(id);
    
  }

  

  
  

}
