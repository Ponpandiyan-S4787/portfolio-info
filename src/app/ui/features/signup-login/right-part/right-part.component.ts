import { Component, Input } from '@angular/core';
import { signupLoginInterface } from '../../../../smart/data-access/mocks/signup-login-mock';

@Component({
  selector: 'app-right-part',
  standalone: true,
  imports: [],
  templateUrl: './right-part.component.html',
  styleUrl: './right-part.component.scss'
})
export class RightPartComponent {
@Input() loginContent!:signupLoginInterface[]
}
