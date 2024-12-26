import { Component} from '@angular/core';
import { SignupLoginPageComponent } from '../../../ui/pages/signup-login-page/signup-login-page.component';
import { SignupFormModel } from '../../data-access/models/signup-form.model';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { signupLoginMockRes } from '../../data-access/mocks/signup-login-mock';

@Component({
  selector: 'app-signup-login',
  standalone: true,
  imports: [SignupLoginPageComponent],
  templateUrl: './signup-login.component.html',
  styleUrl: './signup-login.component.scss',
})
export class SignupLoginComponent {
  signupLoginContent=signupLoginMockRes
  storeArr = new Array();
  usersInfo!: SignupFormModel;

  constructor(private fireStorage: Firestore) {
    this.SignupDataBaseData$();
  }

  onLoginBtnEmit(eve: any) {
    const LOGIN_USERID = localStorage.getItem('loginUserId');
    for (let i = 0; i < this.storeArr.length; i++) {
      if (this.storeArr[i].id === LOGIN_USERID) {
        localStorage.setItem("LoggedInUserInfo",this.storeArr[i].firstName)
        return (this.usersInfo = this.storeArr[i]);
      }
    }
  }
  async SignupDataBaseData$() {
    try {
      const querySnapshot = await getDocs(
        collection(this.fireStorage, 'sigup-userInfo')
      );
      querySnapshot.forEach((doc) => {
        const GET_SIGNUP_DATA = doc.data() as Observable<SignupFormModel>;
        this.storeArr.push(GET_SIGNUP_DATA);
        // console.log(`Document ID: ${doc.id}`, this.usersInfo,"documentId");
        return this.storeArr;
      });
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  }
}
