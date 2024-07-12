import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  user = {
    username: '',
    email: '',
    phone: '',
    age: null,
    password: ''
  };
  confirmPassword: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    if (this.user.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    this.http.post('http://localhost:8080/api/register', this.user).subscribe(response => {
      alert("Registration successful!");
      this.router.navigate(['/login']);
    }, error => {
      alert("User already exists!");
    });
  }
}

