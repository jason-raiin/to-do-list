import {inject} from '@angular/core';
import { Router } from '@angular/router';
import * as Parse from 'parse';

export const loginGuard = () => {
  const router = inject(Router);

  if (!Parse.User.current()) {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl('/home');
};
