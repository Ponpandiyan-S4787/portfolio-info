import { inject, Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
} from '@angular/fire/auth';
import {  from, Observable} from 'rxjs';
import { SignupFormModel } from '../../../smart/data-access/models/signup-form.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth=inject(Auth)
  // constructor(private auth: Auth) {
  //   this.currentUser$=authState(this.auth)
  // }
  signupMethod( email: string, password: string) :Observable<UserCredential>{
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    )
  }
  loginMethod(email: string, password: string):Observable<any>{
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
  logoutMethod():Observable<any> {
    return from(signOut(this.auth));
  }
  signupWithGoogleMethod() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
}
