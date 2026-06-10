import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  roleId: number; // or nested role object depending on backend
}
export interface Role {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class Auth {
  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  register(request: RegisterRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, request);
  };

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.baseUrl}/roles`);
  }

  login(request: RegisterRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, request);
  };
}
