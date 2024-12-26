import { Component } from '@angular/core';
import { PortfolioPageComponent } from "../../../ui/pages/portfolio-page/portfolio-page.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioPageComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
