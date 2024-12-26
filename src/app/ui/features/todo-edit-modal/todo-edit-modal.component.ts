import { Component, Input } from '@angular/core';
import { SharedButtonComponent } from '../../../shared/shared-components/shared-button/shared-button.component';
import { SharedInputComponent } from '../../../shared/shared-components/shared-input/shared-input.component';
import { TodoEditModalInterface } from '../../../smart/data-access/models/todo.edit.model';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoFormModel } from '../../../smart/data-access/models/todo.model';
import { TodoFacades } from '../../../smart/data-access/+states/todo.facade';

@Component({
  selector: 'app-todo-edit-modal',
  standalone: true,
  imports: [SharedButtonComponent, SharedInputComponent, ReactiveFormsModule],
  templateUrl: './todo-edit-modal.component.html',
  styleUrl: './todo-edit-modal.component.scss',
})
export class TodoEditModalComponent {
  @Input() todoEditedDatas!: TodoEditModalInterface;

  todoEdittedFname!: string;
  todoEdittedLname!: string;
  todoEdittedEmail!: string;
  todoEdittedPassword!: string;

  constructor(private facade: TodoFacades) {}

  edittedFname(fname: string) {
    return (this.todoEdittedFname = fname);
  }
  edittedLname(lname: string) {
    return (this.todoEdittedLname = lname);
  }
  edittedEmail(email: string) {
    return (this.todoEdittedEmail = email);
  }
  edittedPassword(password: string) {
    return (this.todoEdittedPassword = password);
  }
  onEmitSaveBtn(idx: number) {
    let updated_Todo_datas: TodoFormModel = {
      id: idx,
      fname: this.todoEdittedFname,
      lname: this.todoEdittedLname,
      email: this.todoEdittedEmail,
      password: this.todoEdittedPassword,
    };
    this.facade.updateTask(updated_Todo_datas);
  }
}
