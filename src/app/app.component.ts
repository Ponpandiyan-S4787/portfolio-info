import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedNavbarComponent } from './shared/shared-components/shared-navbar/shared-navbar.component';
import { FooterComponent } from './smart/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedNavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url!=='home') {
      this.router.navigate(['/home']);
      localStorage.clear()
    }
  }
}
