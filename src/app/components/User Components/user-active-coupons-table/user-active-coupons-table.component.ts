import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-active-coupons-table',
  templateUrl: './user-active-coupons-table.component.html',
  styleUrls: ['./user-active-coupons-table.component.css']
})
export class UserActiveCouponsTableComponent implements OnInit {

  public activeCoupons: Coupon[];
  public coupon: Coupon;
  
  constructor(private router:Router, private couponService : CouponService) { }

  ngOnInit() {
    if (sessionStorage.getItem("userType")==="Customer"){
      let observable = this.couponService.getCustomerActiveCoupons(parseInt(sessionStorage.getItem("userId")));
      observable.subscribe(coupons => {
        // alert("succes in bringing customr coupons");
          this.activeCoupons = coupons}
      ); 
    }
    else{
    let observable = this.couponService.getCompanyCoupons(parseInt(sessionStorage.getItem("userId")));
    observable.subscribe(coupons => {
      // alert("succes in bringing company coupons");
        this.activeCoupons = coupons}
    ); 
    }
  }
  public goToUserProfile() : void {
  //  this.coupon.couponId = couponId;
  if (sessionStorage.getItem("userType")==="Customer"){
    this.router.navigate(["/customerProfile"]);
  }else {
    this.router.navigate(["/companyProfile"]);
    }
  }

  public goToCouponProfile(couponId: number) : void {
    this.router.navigate(["/couponProfile/" + couponId]);
  }
}


