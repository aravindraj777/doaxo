import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from 'src/app/models/todo.model';
import { Store } from '@ngrx/store';
import { addTodo, loadTodos, removeTodo, toggleTodo } from 'src/app/store/actions/todo.action';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{

  todos$!:Todo[];
  newTodoTitle=''

  constructor(private store:Store<{todos:{todos:Todo[]}}>){
    store.select('todos').subscribe((todoState:{todos:Todo[]})=>{
      this.todos$ = todoState.todos;
    })
  }

  ngOnInit(){
    this.store.dispatch(loadTodos({todos:this.todos$}))
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
  this.store.dispatch(toggleTodo({id}))
}


removeTodo(id:string):void{
  this.store.dispatch(removeTodo({id}))
}


}
