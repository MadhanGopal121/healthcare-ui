import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Doctors {

   private api =
    'http://localhost:8080/doctors';

    constructor(private http: HttpClient) {}

    getAllDoctors() {
      return this.http.get<any[]>(
        this.api
      );
    }

    getAllDoctorsDropdown() {
      return this.http.get<any[]>(
        `${this.api}/dropdown`
      );
    }

    createDoctor(data:any) {
      return this.http.post(
        `${this.api}/create`,
        data
     );
    }

    updateDoctor(id:number,data:any) {
      return this.http.put(
        `${this.api}/${id}`,
        data
      );
    }

  deleteDoctor(id:number) {
    return this.http.delete(
      `${this.api}/${id}`
    );
  }
}
