import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private customer = new Customer ();

  constructor ( private http: HttpClient ) { }

  
  public register(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>("http://localhost:8080/COUPONS_PROJECT_SPRING/register", customer, { withCredentials: true } );
    // .catch(this.handleError);
  }
 

  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:8080/COUPONS_PROJECT_SPRING/customers/getAll", { withCredentials: true });
 } 

  
 public getCustomer(customerId: number): Observable<Customer> {
   return this.http.get<Customer>("http://localhost:8080/COUPONS_PROJECT_SPRING/customers/" + customerId, { withCredentials: true })
  }

  public updateCustomer(customer: Customer) : Observable<Response>{
    return this.http.put<Response>("http://localhost:8080/COUPONS_PROJECT_SPRING/customers//update",customer, { withCredentials: true })
  }

}
