import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Addressbill,Billing } from '../Model/Billing';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class billingService {
  constructor(private http: HttpClient) {}

  addBill(bill: Billing): Observable<Billing[]> {
    alert(JSON.stringify(bill));
    return this.http.post<Billing[]>(
      `http://localhost:8990/RestVegetables/api/bill/addbill`,
      bill
    );
  }
  getBills(): Observable<Billing[]>{
    return this.http.get<Billing[]>("http://localhost:8990/RestVegetables/api/bill/viewAll");
  }

  getBillingById(id: any): Observable<Object> {
    alert(id);
    return this.http.get(`http://localhost:8990/RestVegetables/api/bill/viewbill/${id}`);
  }

  updateBilling(bid:Billing):Observable<Billing>{
    return this.http.put<Billing>("http://localhost:8990/RestVegetables/api/bill/updatebill",bid);
  }

}
