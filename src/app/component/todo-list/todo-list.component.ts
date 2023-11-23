import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from 'src/app/models/todo.model';
import { Store } from '@ngrx/store';
import { addTodo } from 'src/app/store/actions/todo.action';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todos$!:Todo[];
  newTodoTitle=''

  constructor(private store:Store<{todos:{todos:Todo[]}}>){
    store.select('todos').subscribe((todoState:{todos:Todo[]})=>{
      this.todos$ = todoState.todos;
    })
  }

addTodo():void {

  if(this.newTodoTitle.trim() === ''){
    return;

  }
  const todo:Todo = {
    id:Date.now().toString(),
    title:this.newTodoTitle,
    completed:false,
    userId:1
  }
  this.store.dispatch(addTodo({todo}));
  this.newTodoTitle = ''
}

toggleTodo(id:string):void{
  
}

removeTodo(id:string):void{

}


}
