import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { TodoFormModel } from "../models/todo.model";
import { addTodo, deleteTodo,updateTodo } from "./todo.action";
import { TodoState } from "./todo.reducer";
import { todoSelector } from "./todo.selector";

@Injectable({
    providedIn:'root'
})
export class TodoFacades{
    store=inject(Store<TodoState>)
    getTodo$=this.store.select(todoSelector)

    addTodoTask(todo: TodoFormModel){
        this.store.dispatch(addTodo({todo}))
    }
    deleteTask(idx: number){
        this.store.dispatch(deleteTodo({idx}))
    }
    updateTask(updatedTodo: TodoFormModel){
        this.store.dispatch(updateTodo({updatedTodo}))
    }
}