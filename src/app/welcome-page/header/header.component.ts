// header.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  @Input() userRole: string = ''; // Define userRole as an input property

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Fetch the user role or any other necessary information
    this.getUserRole();
  }

  isLoggedIn(): boolean {
    // Use the AuthService to check if the user is logged in
    return !!this.authService.getToken();
  }

  isAdmin(): boolean {
    // Check if the user is an admin based on the user role
    return this.userRole === 'admin';
  }

  getUserRole(): void {
    // Fetch the user role from the AuthService
    const userDetails = this.authService.getUserDetails();
    this.userRole = userDetails ? userDetails.role : '';
  }
}
