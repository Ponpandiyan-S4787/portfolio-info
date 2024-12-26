import { Component } from '@angular/core';
import { PortfolioInfoComponent } from "../../features/portfolio/portfolio-info/portfolio-info.component";

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [PortfolioInfoComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent {

}
