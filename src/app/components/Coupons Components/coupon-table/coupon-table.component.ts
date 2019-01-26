import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-table',
  templateUrl: './coupon-table.component.html',
  styleUrls: ['./coupon-table.component.css']
})
export class CouponTableComponent implements OnInit {

  
  public allActiveCoupons: Coupon[];
  public coupon: Coupon;

  constructor(private router:Router, private couponService : CouponService) { }

  ngOnInit() {
    let observable = this.couponService.getAllActiveCoupons();
    observable.subscribe(coupons => {
      this.allActiveCoupons = coupons}
    ); 
  }

  public goToProfile(couponId: number) : void {
  //  this.coupon.couponId = couponId;
    this.router.navigate(["/couponProfile/" + couponId]);
  }
}


