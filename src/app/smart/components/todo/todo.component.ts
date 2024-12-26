import { Component } from '@angular/core';
import { TodoPageComponent } from '../../../ui/pages/todo-page/todo-page.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoPageComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

}
