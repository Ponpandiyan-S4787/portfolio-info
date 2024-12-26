import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedInputComponent } from '../../../../shared/shared-components/shared-input/shared-input.component';
import { SharedButtonComponent } from '../../../../shared/shared-components/shared-button/shared-button.component';
import {
  SignupFormModel,
  signupForms,
} from '../../../../smart/data-access/models/signup-form.model';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthService } from '../../../../shared/shared-data-access/services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { DatabaseService } from '../../../../shared/shared-data-access/services/database.service';
import { LeftPartComponent } from '../left-part/left-part.component';
import { RightPartComponent } from '../right-part/right-part.component';
import { signupLoginInterface } from '../../../../smart/data-access/mocks/signup-login-mock';
import { SocialImgsComponent } from '../social-imgs/social-imgs.component';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LoginFormComponent,
    SharedInputComponent,
    SharedButtonComponent,
    LeftPartComponent,
    RightPartComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent {
  @Input() usersInfo!: SignupFormModel;
  @Input() signupLoginContent!:signupLoginInterface[]
  @Output() loginBtnEmit = new EventEmitter<any>();
  signupForm = signupForms;
  isSignupForm: boolean = true;
  isLoginForm: boolean = false;
  isDisabled: boolean = false;
  isFnameValid!: string;
  isLnameValid!: string;
  isEmailValid!: string;
  isPasswordValid!: string;
  constructor(
    private authService: AuthService,
    private databaseService: DatabaseService,
    private toast: HotToastService
  ) {}

  onSignupBtn() {
    if (this.signupForm.valid) {
      this.isDisabled = !this.isDisabled;
      const {
        signupEmail,
        signupPassword,
        signupFname,
        signupPostalCode,
        signupState,
        signupLname,
        signupDOB,
        signupGenter,
        signupAddress,
        signupCity,
      } = this.signupForm.value as any;
      this.authService
        .signupMethod(signupEmail, signupPassword)
        .pipe(
          switchMap((user) =>
            this.databaseService.signupUser({
              id: user.user.uid,
              lastName: signupLname,
              password: signupPassword,
              dob: signupDOB,
              genter: signupGenter,
              address: signupAddress,
              city: signupCity,
              state: signupState,
              postalCode: signupPostalCode,
              firstName: signupFname,
              email: user.user.email,
            })
          ),
          this.toast.observe({
            success: 'Successfully registerd',
            loading: 'loading...!',
            error: 'Please enter the proper information',
          })
        )
        .subscribe(() => {
          window.location.reload();
          this.isSignupForm = !this.isSignupForm;
          this.isLoginForm = !this.isLoginForm;
        });
    } else {
      alert('Please enter your informations');
    }
    this.isFnameValid = '';
    this.isLnameValid = '';
    this.isEmailValid = '';
    this.isPasswordValid = '';
    this.signupForm.reset();
  }
  onSignupWithGoogleBtn() {
    this.authService.signupWithGoogleMethod();
  }
  onLoginCancelEvent(eve: any) {
    this.isSignupForm = !this.isSignupForm;
    this.isLoginForm = !this.isLoginForm;
  }
  onLoginFormBtnEmit(eve: any) {
    this.loginBtnEmit.emit(eve);
  }
  onLoginLink() {
    this.isSignupForm = !this.isSignupForm;
    this.isLoginForm = !this.isLoginForm;
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
