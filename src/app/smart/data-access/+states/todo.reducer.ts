import { createReducer, on } from '@ngrx/store';
import { TodoFormModel } from '../models/todo.model';
import { addTodo, deleteTodo, updateTodo } from './todo.action';

export interface TodoState {
  todos: TodoFormModel[];
}
const todoInitialState: TodoState = {
  todos: [],
};
export const todoReducer = createReducer(
  todoInitialState,
  on(addTodo, (state, action) => {
    return {
      ...state,
      todos: [...state.todos, action.todo],
    };
  }),
  on(deleteTodo, (state, action) => {
    return {
      ...state,
      todos: state.todos.filter((todo, idx) => {
        return idx !== action.idx;
      }),
    };
  }),
  on(updateTodo, (state, action) => {
    // return {
    //   ...state,
    //   todos: state.todos.map((todo) => {
    //     return todo.id === action.updatedTodo.id
    //       ? action.updatedTodo
    //       : todo;
    //   }),
    // };
    return {
      ...state,
      todos: state.todos.map((todo) => {
        return todo.password === action.updatedTodo.password
          ? action.updatedTodo
          : todo;
      }),
    };
    
  })
);
