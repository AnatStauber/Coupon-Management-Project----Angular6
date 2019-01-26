import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private company = new Company();

  constructor(private http: HttpClient) { }

  
  public getAllCompanies(): Observable<Company[]> {
     return this.http.get<Company[]>("http://localhost:8080/COUPONS_PROJECT_SPRING/companies/getAll", { withCredentials: true });
  } 

  public getCompany(id : number) : Observable<Company> {
    return this.http.get<Company>("http://localhost:8080/COUPONS_PROJECT_SPRING/companies/"+id, { withCredentials: true });
  }

  public updateCompany(company: Company) : Observable<Response>{
    return this.http.put<Response>("http://localhost:8080/COUPONS_PROJECT_SPRING/companies/update", company, { withCredentials: true })
  }
 
}
