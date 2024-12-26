import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoFormModel } from '../../../smart/data-access/models/todo.model';
import { SharedButtonComponent } from '../../../shared/shared-components/shared-button/shared-button.component';
import { TodoEditModalInterface } from '../../../smart/data-access/models/todo.edit.model';
import { TodoEditModalComponent } from '../todo-edit-modal/todo-edit-modal.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, SharedButtonComponent, TodoEditModalComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input() content!: TodoFormModel[];
  @Input() todoEditedDatas!: TodoEditModalInterface;
  @Output() deleteBtnEmit = new EventEmitter<number>();
  @Output() editBtnEvent = new EventEmitter<any>();

  onDeleteEmit(idx: number) {
    this.deleteBtnEmit.emit(idx);
  }

  onEditEmit(idx: number, fname: any, lname: any, email: any, password: any) {
    if (idx !== null && fname !== null && lname !== null && email !== null) {
      let todo_List_Datas: TodoEditModalInterface = {
        idx: idx,
        fname: fname,
        lname: lname,
        email: email,
        password: password,
      };
      this.editBtnEvent.emit(todo_List_Datas);
    }
  }
}
