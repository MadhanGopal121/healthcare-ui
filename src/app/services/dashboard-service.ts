import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
   private api =
    'http://localhost:8080/dashboard';

    constructor(private http: HttpClient) {}

    getDashboard() {
      return this.http.get<any[]>(
        this.api
      );
    }
}
