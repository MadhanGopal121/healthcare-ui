import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Auth,RegisterRequest,Role } from '../../services/auth';
import {MatSnackBar,MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common'; 
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ CommonModule,FormsModule,RouterModule,MatSnackBarModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register implements OnInit{
    name = '';
  email = '';
  password = '';
  roleId = 1;
  roles: Role[] = [];


   constructor(private auth: Auth,private snackBar: MatSnackBar) {}
   ngOnInit() {
    this.auth.getRoles().subscribe({
      next: (data) => (this.roles = data),
      error: () => {
        this.snackBar.open('Failed to load roles', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar'],
        });
      },
    });
  }
   
   register() {
        const request: RegisterRequest = {
          name: this.name,
          email: this.email,
          password: this.password,
          roleId: this.roleId
        };
    this.auth.register(request).subscribe({
        next: (response) => {
          if (response.success) {
            this.snackBar.open(response.message, 'Close', {
              duration: 3000,
              panelClass: ['success-snackbar']
            });
          }
        },
        error: (err) => {
          this.snackBar.open('Registration failed', 'Close', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      });
  }
}
