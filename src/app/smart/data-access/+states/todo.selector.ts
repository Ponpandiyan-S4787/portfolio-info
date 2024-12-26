import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

const selectValue = createFeatureSelector<TodoState>('todo');
export const todoSelector = createSelector(selectValue, (state) => {
  return state.todos;
});
