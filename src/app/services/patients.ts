import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Patients {
  private api =
    'http://localhost:8080/patients';

    constructor(private http: HttpClient) {}

    getAllPatients() {
      return this.http.get<any[]>(
        this.api
      );
    }

    getAllPatientsDropdown() {
      return this.http.get<any[]>(
        `${this.api}/dropdown`
      );
    }

    createPatient(data:any) {
      return this.http.post(
        `${this.api}/create`,
        data
     );
    }

    updatePatient(id:number,data:any) {
      return this.http.put(
        `${this.api}/${id}`,
        data
      );
    }

  deletePatient(id:number) {
    return this.http.delete(
      `${this.api}/${id}`
    );
  }
}
