import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/models/todo.model";
import { addTodo, loadTodos, removeTodo, toggleTodo } from "../actions/todo.action";

export interface TodoState{
    todos:Todo[]
}

export const initialState:TodoState={
    todos:[]
}

export const TodoReducer = createReducer(initialState,
    on(addTodo, (state,{todo})=>{
        return{
            ...state,
            todos:[...state.todos,todo]
        }
       
    }),
    on(removeTodo,(state,{id})=>{
        return{
            ...state,
            todos:state.todos.filter((todo)=>todo.id !==id)
        }
    }),
    on(toggleTodo,(state,{id})=>{
        return{
            ...state,
            todos:state.todos.map((todo)=>(todo.id ===id ? {...todo,completed:!todo.completed}:todo))
        }
    }),

    on(loadTodos,(state,{todos})=>{
        return{
            ...state,
            todos
        }
    })

    )
