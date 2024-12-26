import { Routes } from '@angular/router';
import { HomeComponent } from './smart/components/home/home.component';
import { NotFoundComponent } from './shared/shared-components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'todo',
    loadChildren: () =>
      import('./smart/components/todo/todo.routes').then(
        (todo) => todo.todoRoutes
      ),
  },
  {
    path: 'sign-up/log-in',
    loadChildren: () =>
      import('./smart/components/signup-login/signup-login.routes').then(
        (signupLogin) => signupLogin.signupLoginRoutes
      ),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./smart/components/portfolio/portfolio.routes').then(
        (portfolio) => portfolio.portfolioRoutes
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
