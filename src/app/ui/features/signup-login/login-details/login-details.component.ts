import { Component, Input } from '@angular/core';
import { SignupFormModel } from '../../../../smart/data-access/models/signup-form.model';

@Component({
  selector: 'app-login-details',
  standalone: true,
  imports: [],
  templateUrl: './login-details.component.html',
  styleUrl: './login-details.component.scss'
})
export class LoginDetailsComponent {
@Input() usersInfo!:SignupFormModel
isVerified:string="Verified"
}
