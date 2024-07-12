import { Component } from '@angular/core';
import { AuthService } from '../service/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: data => {
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.error('Login error', err);
      }
    });
  }
}
