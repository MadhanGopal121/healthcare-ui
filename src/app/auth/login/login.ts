import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth, RegisterRequest } from '../../services/auth';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, HttpClientModule, MatSnackBarModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private auth: Auth, private router: Router, private snackBar: MatSnackBar) {}

  login() {
    const request: RegisterRequest = {
      name: '', // not needed for login
      email: this.email,
      password: this.password,
      roleId: 0 // not needed for login
    };

    this.auth.login(request).subscribe({
      next: (response) => {
        if (response.success) {
          if (response.message.includes('/dashboard')) {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/patient/list']);
          }
        } else {
          this.snackBar.open(response.message, 'Close', { duration: 3000 });
        }
      },
      error: () => {
        this.snackBar.open('Login failed', 'Close', { duration: 3000 });
      }
    });
  }
}
