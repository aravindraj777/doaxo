import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/models/todo.model";
import { addTodo, removeTodo, toggleTodo } from "../actions/todo.action";

export interface TodoState{
    todos:Todo[]
}

export const initialState:TodoState={
    todos:[{
        id:'1',
        title:'Todo 1',
        completed:false,
        userId:1
}]
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
    })
    )
