import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../modals/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo: Todo = new Todo();

  private baseUrl = 'http://localhost:8080';  

  constructor(private http:HttpClient) { }

  public getTodos(){
    return this.http.get<any>(this.baseUrl + '/todos/');
     
  }

  createTodo(todoData: Todo) {
    return this.http.post(this.baseUrl + '/todos/', todoData);
    todoData.completed=false;
      
  }


  /*updateTodo(todoData: Todo)  {
    return this.http.put(this.baseUrl + '/todos/' + todoData.id, todoData);
      
  }*/

  deleteTodo(id: number) {
    return this.http.delete(this.baseUrl + '/todos'+'/' + id);
      
  }

  comletedTodo(id:number) {
    return this.http.get("http://localhost:8080/completed/"+id);
  }

  public updateTodo(todo:Todo) {
    return this.http.put("http://localhost:8080/todo",todo);
  }

  setter(todo:Todo){
    this.todo= todo;
  }

 getter(){
   return this.todo;
 }

}
