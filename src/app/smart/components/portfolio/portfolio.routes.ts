import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { TechToolsComponent } from '../../../ui/features/portfolio/tech-tools/tech-tools.component';
import { RightPartComponent } from '../../../ui/features/portfolio/right-part/right-part.component';

export const portfolioRoutes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
        {
            path:"portfolio-right",
            component: RightPartComponent
        },
      {
        path: 'portfolio-tech-tool',
        component: TechToolsComponent,
      },
    ],
  },
];
