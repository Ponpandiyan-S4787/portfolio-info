import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SignupFormComponent } from '../../features/signup-login/signup-form/signup-form.component';
import { SignupFormModel } from '../../../smart/data-access/models/signup-form.model';
import { signupLoginInterface } from '../../../smart/data-access/mocks/signup-login-mock';

@Component({
  selector: 'app-signup-login-page',
  standalone: true,
  imports: [SignupFormComponent],
  templateUrl: './signup-login-page.component.html',
  styleUrl: './signup-login-page.component.scss',
})
export class SignupLoginPageComponent {
  @Input() usersInfo!: SignupFormModel;
  @Input() signupLoginContent!:signupLoginInterface[]
  @Output() loginBtnEmit = new EventEmitter<any>();

  onLoginBtnEmit(eve: any) {
    this.loginBtnEmit.emit(eve);
  }
}
