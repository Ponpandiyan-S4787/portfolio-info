import { Component } from '@angular/core';
import { HomePageComponent } from '../../../ui/pages/home-page/home-page.component';
import { homeBodyMockResponse } from '../../data-access/mocks/homepage-mock';
import { SignupFormModel } from '../../data-access/models/signup-form.model';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { SignupLoginComponent } from "../signup-login/signup-login.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomePageComponent, SignupLoginComponent, PortfolioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  bodyMock = homeBodyMockResponse;
  // usersInfo!: SignupFormModel;
  
  // constructor(private fireStorage: Firestore) {}
  
  // onLoginBtnEmit(eve: any) {
  //   console.log("start")
  //   this.dataBaseData$();
  // }

  // async dataBaseData$() {
  //   try {
  //     const querySnapshot = await getDocs(
  //       collection(this.fireStorage, 'sigup-userInfo')
  //     );
  //     querySnapshot.forEach((doc) => {
  //       this.usersInfo = doc.data() as SignupFormModel;
  //       // console.log(`Document ID: ${doc.id}`, this.usersInfo);
  //       // return formData
  //     });
  //   } catch (error) {
  //     console.error('Error getting documents: ', error);
  //   }
  // }
}
