import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Appointmentservice {

  private api =
    'http://localhost:8080/appointments';

    constructor(private http: HttpClient) {}

    getAllAppointments() {
      return this.http.get<any[]>(
        this.api
      );
    }

    createAppointment(data:any) {
      return this.http.post(
        `${this.api}/create`,
        data
     );
    }

    updateAppointment(id:number,data:any) {
      return this.http.put(
        `${this.api}/${id}`,
        data
      );
    }

  deleteAppointment(id:number) {
    return this.http.delete(
      `${this.api}/${id}`
    );
  }

}
