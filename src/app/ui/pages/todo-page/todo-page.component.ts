import { Component } from '@angular/core';
import { TodoFormComponent } from '../../features/todo-form/todo-form.component';
import { TodoListComponent } from '../../features/todo-list/todo-list.component';
import { TodoFacades } from '../../../smart/data-access/+states/todo.facade';
import {
  TodoFormModel,
  todoForms,
} from '../../../smart/data-access/models/todo.model';
import { TodoEditModalComponent } from '../../features/todo-edit-modal/todo-edit-modal.component';
import { TodoEditModalInterface } from '../../../smart/data-access/models/todo.edit.model';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent {
  todoData$!: TodoFormModel[];
  todoEditedDatas!: TodoEditModalInterface;

  constructor(private facade: TodoFacades) {}

  onSubmitted(todo: TodoFormModel) {
    this.facade.addTodoTask(todo);
    this.facade.getTodo$.subscribe((data) => {
      this.todoData$ = data;
    });
  }
  onCancelled() {}

  deleteEmitted(idx: number) {
    this.facade.deleteTask(idx);
  }
  editEventEmitted(listDatas: TodoEditModalInterface) {
    this.todoEditedDatas = listDatas;
  }
}
