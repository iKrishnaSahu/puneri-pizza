import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if(!isLoggedIn) {
    return router.createUrlTree(['get-started']);
  }
  return !!isLoggedIn;
};
