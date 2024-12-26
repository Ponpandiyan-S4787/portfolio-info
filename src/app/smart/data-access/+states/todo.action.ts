import { createAction, props } from '@ngrx/store';
import { TodoFormModel } from '../models/todo.model';

export const addTodo = createAction(
  '[add] add todo',
  props<{ todo: TodoFormModel }>()
);
export const deleteTodo = createAction(
  '[delete] delete todo',
  props<{ idx: number }>()
);
export const updateTodo = createAction(
  '[update] update todo',
  props<{ updatedTodo: TodoFormModel }>()
);