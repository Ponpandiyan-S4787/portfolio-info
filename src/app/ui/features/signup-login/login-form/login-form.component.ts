import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  GetLoginInterFace,
  loginForms,
} from '../../../../smart/data-access/models/login-form.model';
import { SharedInputComponent } from '../../../../shared/shared-components/shared-input/shared-input.component';
import { SharedButtonComponent } from '../../../../shared/shared-components/shared-button/shared-button.component';
import { AuthService } from '../../../../shared/shared-data-access/services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { SignupFormModel } from '../../../../smart/data-access/models/signup-form.model';
import { CommonModule } from '@angular/common';
import { LoginSuccessComponent } from '../login-success/login-success.component';
import { LoginDetailsComponent } from '../login-details/login-details.component';
import { SocialImgsComponent } from '../social-imgs/social-imgs.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SharedInputComponent,
    SharedButtonComponent,
    CommonModule,
    LoginSuccessComponent,
    LoginDetailsComponent,
    SocialImgsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  @Input() usersInfo!: SignupFormModel;
  @Output() loginCancelEmit = new EventEmitter<any>();
  @Output() loginFormBtnEmit = new EventEmitter<any>();
  isShowLoginForm: boolean = true;
  isShowloginSuccess: boolean = false;
  loginForm = loginForms;
  isDisabled: boolean = false;
  isFnameValid!: string;
  isLnameValid!: string;
  isEmailValid!: string;
  isPasswordValid!: string;

  constructor(
    private authService: AuthService,
    private toast: HotToastService
  ) {}

  onLoginBtn() {
    if (this.loginForm.valid) {
      this.isDisabled = !this.isDisabled;
      const { loginEmail, loginFname, loginLname, loginPassword } = this
        .loginForm.value as any;
      this.authService
        .loginMethod(
          this.loginForm.value.loginEmail as string,
          this.loginForm.value.loginPassword as string
        )
        .pipe(
          this.toast.observe({
            success: 'Login Successfully!',
            loading: 'stay back ....!',
            error:
              'your crediential wrong. Please try to enter the correct informations',
          })
        )
        .subscribe((data: GetLoginInterFace) => {
          localStorage.setItem('loginUserId', data.user.uid);
          const LOGIN_FORM_DATAS = {
            firstName: loginFname,
            lastName: loginLname,
            email: loginEmail,
            password: loginPassword,
          };
          this.loginFormBtnEmit.emit(LOGIN_FORM_DATAS);
          this.isShowLoginForm = false;
          this.isShowloginSuccess = true;
        });
    }
    else{
      alert("Please enter your informations")
    }
    this.isFnameValid = '';
    this.isLnameValid = '';
    this.isEmailValid = '';
    this.isPasswordValid = '';
    this.loginForm.reset();
  }
  onCancelBtn() {
    this.loginCancelEmit.emit();
  }
  onEmitFname(fname: string) {
    if ((fname.length) >= 8) {
      return this.isFnameValid = 'valid';
    } else if ((fname.length) <= 7 && (fname.length) > 1) {
      return this.isFnameValid = 'inValid';
    } else {
      return this.isFnameValid = 'default';
    }
  }
  onEmitLname(lname: string) {
    if ((lname.length) >= 4) {
      this.isLnameValid = 'valid';
    } else if ((lname.length) < 4 && (lname.length) > 1) {
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
  onEmitPassword(paswrd:string){
    if ((paswrd.length )>= 8) {
      this.isPasswordValid = 'valid';
    } else if ((paswrd.length )< 4 && (paswrd.length) > 1) {
      this.isPasswordValid = 'inValid';
    } else {
      this.isPasswordValid = 'default';
    }
  }
}
