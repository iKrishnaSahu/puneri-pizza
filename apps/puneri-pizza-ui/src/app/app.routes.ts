import { Route } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(comp => comp.DashboardComponent),
    canActivate: [authGuard]
  },
  {
    path: 'cart',
    loadComponent: () => import('./components/cart/cart.component').then(comp => comp.CartComponent),
    canActivate: [authGuard]
  },
  {
    path: 'get-started',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];
