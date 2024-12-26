import { Injectable } from '@angular/core';
import { collection, doc, docData, Firestore, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { SignupFormModel } from '../../../smart/data-access/models/signup-form.model';
import { from, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private fireStorage: Firestore) {}
  
  signupUser(user: SignupFormModel): Observable<any> {
    const signupRef = doc(this.fireStorage, 'sigup-userInfo', user.id);
    return from(setDoc(signupRef, user));
  }

  
  // updateUser(user: SignupFormModel): Observable<any> {
  //   const updateRef = doc(this.fireStorage, 'sigup-userInfo', user.id);
  //   return from(updateDoc(updateRef, { ...user }));
  // }



}
