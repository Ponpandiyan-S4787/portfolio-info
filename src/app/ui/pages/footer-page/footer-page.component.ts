import { Component } from '@angular/core';
import { FooterDetailsComponent } from "../../features/footer/footer-details/footer-details.component";

@Component({
  selector: 'app-footer-page',
  standalone: true,
  imports: [FooterDetailsComponent],
  templateUrl: './footer-page.component.html',
  styleUrl: './footer-page.component.scss'
})
export class FooterPageComponent {

}
