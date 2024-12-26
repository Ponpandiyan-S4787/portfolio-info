import { Component, Input } from '@angular/core';
import { signupLoginInterface } from '../../../../smart/data-access/mocks/signup-login-mock';

@Component({
  selector: 'app-left-part',
  standalone: true,
  imports: [],
  templateUrl: './left-part.component.html',
  styleUrl: './left-part.component.scss'
})
export class LeftPartComponent {
@Input() signupContent!:signupLoginInterface[]
}
