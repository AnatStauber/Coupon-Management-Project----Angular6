import { Injectable } from '@angular/core';
import { Coupon } from '../models/coupon';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchase } from '../models/purchase';
// import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  private coupon = new Coupon();

  private purchaseDetails = new Purchase();

  constructor(private http: HttpClient, private location: Location) { }

  public getAllActiveCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/activeCoupons", { withCredentials: true });
  }

  public getCoupon(couponId: number): Observable<Coupon> {
    return this.http.get<Coupon>("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/"+couponId , { withCredentials: true });
  } 

  public purchase(purchaseDetails : Purchase) :  Observable<Purchase> {
    return this.http.post<Purchase>("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/purchaseCoupon",purchaseDetails, { withCredentials: true });
  }

  public getCouponsByType(couponType : string): Observable<Coupon[]> {
    // let params = new HttpParams();
    // params = params.append('type', couponType);
    return this.http.get<Coupon[]>("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/byType",{params: {'type': couponType}});//, { withCredentials: true });
  }

  public getCouponsByPrices (minPrice: number, maxPrice: number): Observable<Coupon[]> {
    return this.http.get<Coupon[]>("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/byPrices",{params: {'minPrice': String(minPrice), 'maxPrice':String(maxPrice)}});
  }

  public getCouponsByEndDate (endDate: string): Observable<Coupon[]> {
    return this.http.get<Coupon[]>("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/b4EndDate",{params: {'endDate': endDate}});
  }
  
  public getCouponsByFilters (type: string, endDate: string, minPrice: string, maxPrice: string): Observable<Coupon[]> {
    return this.http.get<Coupon[]>("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/byFilters",{params: {'type': type, 'endDate': endDate, 'minPrice': minPrice, 'maxPrice': maxPrice}});
  }

  public getCouponTypes () : Observable<String[]> {
    return this.http.get<String[]>("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/getTypes");
  }

  public getCompanyCoupons (companyId: number) :  Observable<Coupon[]> {
    return this.http.get<Coupon[]>("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/companyActiveCoupons/" + companyId, { withCredentials: true });
  }

  public getCustomerActiveCoupons (customerId: number) :  Observable<Coupon[]> {
    return this.http.get<Coupon[]>("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/customerActiveCoupons/" + customerId, { withCredentials: true });
  }

  public getAllCustomerCoupons (customerId: number) :  Observable<Coupon[]> {
    return this.http.get<Coupon[]>("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/customer/" + customerId, { withCredentials: true });
  }
  
  public addCoupon (coupon: Coupon): Observable<Coupon> {
    return this.http.post<Coupon>("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/createCoupon", coupon);
  }
 
  public updateCoupon (coupon: Coupon): Observable<Response>{
    return this.http.put<Response>("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/update", coupon, { withCredentials: true });
  }

  public deleteCoupon  (couponId: number): Observable<Response>{
    return this.http.delete<Response>("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/"+couponId, { withCredentials: true });
  }

}
