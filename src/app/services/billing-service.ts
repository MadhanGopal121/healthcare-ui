import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BillingService {
   private api =
    'http://localhost:8080/billing';

    constructor(private http: HttpClient) {}

    getAllBillings() {
      return this.http.get<any[]>(
        this.api
      );
    }


    createBilling(data:any) {
      return this.http.post(
        `${this.api}/create`,
        data
     );
    }

    updateBilling(id:number,data:any) {
      return this.http.put(
        `${this.api}/${id}`,
        data
      );
    }

  deleteBilling(id:number) {
    return this.http.delete(
      `${this.api}/${id}`
    );
  }
}
