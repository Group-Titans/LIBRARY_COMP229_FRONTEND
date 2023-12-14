// welcome-page.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.less']
})
export class WelcomePageComponent {
  userRole: string = ''; // Set the userRole accordingly
  title: string = ''; // Set the title accordingly

  constructor() {
    // Fetch user role and title data as needed
    // For example, you can set them after a successful login
    this.userRole = 'admin'; // Replace with actual user role
    this.title = 'Welcome'; // Replace with actual title
  }
}
