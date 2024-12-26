import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Output,
} from '@angular/core';
import { SharedInputComponent } from '../../../shared/shared-components/shared-input/shared-input.component';
import { SharedButtonComponent } from '../../../shared/shared-components/shared-button/shared-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TodoFormModel,
  todoForms,
} from '../../../smart/data-access/models/todo.model';
import { TodoRightComponent } from '../todo-right/todo-right.component';
import { TodoLeftComponent } from '../todo-left/todo-left.component';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    SharedInputComponent,
    SharedButtonComponent,
    ReactiveFormsModule,
    TodoRightComponent,
    TodoLeftComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  @Output() submitEvent = new EventEmitter<any>();
  @Output() cancelEvent = new EventEmitter<any>();

  todoForm = todoForms;
  isDisabled: boolean = false;
  isFnameValid!: string;
  isLnameValid!: string;
  isEmailValid!: string;
  isPasswordValid!: string;

  submitEmitted() {
    if (this.todoForm.valid) {
      this.isDisabled = !this.isDisabled;
      let index: number = 1;
      let todo: TodoFormModel = {
        id: index++,
        fname: this.todoForm.value.fname,
        lname: this.todoForm.value.lname,
        email: this.todoForm.value.email,
        password: this.todoForm.value.password,
      };
      this.submitEvent.emit(todo);
      this.isFnameValid = '';
      this.isLnameValid = '';
      this.isEmailValid = '';
      this.isPasswordValid = '';
      this.todoForm.reset();
    } else {
      alert('Please enter your informations');
    }
  }
  cancelEmitted() {
    this.cancelEvent.emit();
  }
  onEmitFname(fname: string) {
    if (fname.length >= 8) {
      return (this.isFnameValid = 'valid');
    } else if (fname.length <= 7 && fname.length > 1) {
      return (this.isFnameValid = 'inValid');
    } else {
      return (this.isFnameValid = 'default');
    }
  }
  onEmitLname(lname: string) {
    if (lname.length >= 4) {
      this.isLnameValid = 'valid';
    } else if (lname.length < 4 && lname.length > 1) {
      this.isLnameValid = 'inValid';
    } else {
      this.isLnameValid = 'default';
    }
  }
  onEmitEmail(email: string) {
    if (email.slice(-10) === '@gmail.com') {
      this.isEmailValid = 'valid';
    } else if (email.slice(-10) !== '@gmail.com') {
      this.isEmailValid = 'inValid';
    } else {
      this.isEmailValid = 'default';
    }
  }
  onEmitPassword(paswrd: string) {
    if (paswrd.length >= 8) {
      this.isPasswordValid = 'valid';
    } else if (paswrd.length < 4 && paswrd.length > 1) {
      this.isPasswordValid = 'inValid';
    } else {
      this.isPasswordValid = 'default';
    }
  }
}
