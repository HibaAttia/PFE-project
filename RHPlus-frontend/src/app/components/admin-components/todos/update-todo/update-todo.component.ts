import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/modals/todo';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  private todo: Todo ;

  constructor(private todoService:TodoService,private router:Router) { }

  ngOnInit() {
    this.todo = this.todoService.getter();
  }

  processForm(){
      
    this.todoService.updateTodo(this.todo).subscribe((todo)=> {
      console.log(todo);
      this.router.navigate(['/todoList']);
    },(error)=>{
      console.log(error);
    });
 }

}
