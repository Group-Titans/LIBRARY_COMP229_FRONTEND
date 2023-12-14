import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup; // Add the "!" to indicate that it will be initialized

  constructor(private authService: AuthService, private fb: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
      // Add more form controls as needed
    });
  }

  registerUser(): void {
    const user = this.registrationForm.value;

    this.authService.register(user).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        alert(user.username + "User has been successfully registered ");
        this.router.navigateByUrl("/login");
        // Handle success (e.g., redirect to login page)
        
      },
      (error) => {
        console.error('Registration failed:', error);
        // Handle error (e.g., display error message)
      }
    );
  }
}
