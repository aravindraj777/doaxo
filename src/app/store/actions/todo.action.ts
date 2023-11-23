import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/models/todo.model";

export const addTodo = createAction('[Todos] add Todo',props<{todo:Todo}>())
export const toggleTodo = createAction('[Todos] toggle Todo',props<{id:string}>())
export const removeTodo = createAction('[Todo] remove Todo',props<{id:string}>())

export const loadTodos = createAction('[Todo] Load Todos',props<{todos:Todo[]}> ())