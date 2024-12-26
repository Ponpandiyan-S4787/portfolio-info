import { Component } from '@angular/core';
import { FooterPageComponent } from "../../../ui/pages/footer-page/footer-page.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterPageComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
