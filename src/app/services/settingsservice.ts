import { Injectable } from '@angular/core';
import { HttpClient

 } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Settingsservice {

  private api =
    'http://localhost:8080/settings';

    constructor(private http: HttpClient) {}

    getAllSettings() {
      return this.http.get<any[]>(
        this.api
      );
    }


    createSetting(data:any) {
      return this.http.post(
        `${this.api}/create`,
        data
     );
    }

    updateSetting(id:number,data:any) {
      return this.http.put(
        `${this.api}/${id}`,
        data
      );
    }

  deleteSetting(id:number) {
    return this.http.delete(
      `${this.api}/${id}`
    );
  }
}
