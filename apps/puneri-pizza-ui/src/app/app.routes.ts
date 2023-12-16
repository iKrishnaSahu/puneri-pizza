import { Route } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(comp => comp.DashboardComponent)
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
