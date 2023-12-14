// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is logged in (check for the presence of the token)
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      // If not logged in, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
