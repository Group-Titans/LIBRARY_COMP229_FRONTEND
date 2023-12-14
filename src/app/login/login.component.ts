import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  credentials: { username: string, password: string } = {
    username: '',
    password: '',
  };

  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        // Handle successful login
        console.log('Login successful', response);

        // Navigate to your welcome page after successful login
        this.router.navigateByUrl('/index'); // Assuming 'welcome' is the correct route
      },
      (error) => {
        // Handle login error, display error message, etc.
        console.error('Login error', error);
      }
    );
  }

  toggleForms() {
    console.log('1111111');
    this.router.navigateByUrl('/register');
  }
}
