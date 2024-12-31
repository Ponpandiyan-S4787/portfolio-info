import { Component, DoCheck } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared-data-access/services/auth.service';

@Component({
  selector: 'app-shared-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shared-navbar.component.html',
  styleUrl: './shared-navbar.component.scss',
})
export class SharedNavbarComponent implements DoCheck {
  loggedUserName!: null | string;
  isOpen:boolean=true
  isClose:boolean=false
  constructor(private router: Router, private authService:AuthService) {}

  ngDoCheck(): void {
    this.loggedUserName = localStorage.getItem('LoggedInUserInfo');
  }

  // onClickedPortfolio() {
  //   let getUserConfirmation = confirm('Do you want to see my portfolio');
  //   if (getUserConfirmation) {
  //     this.router.navigate(['/todo']);
  //   } else {
  //     this.router.navigate(['/home']);
  //   }
  // }
  onUserLoggout() {
    this.authService.logoutMethod()
    localStorage.clear();
    this.router.navigate(['/home']);
  }
  isOpenClicked(){
    this.isOpen=false
    this.isClose=true
  }
  isCloseClicked(){
    this.isOpen=true
    this.isClose=false
  }
}
