import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/services/coupon.service';
import { Coupon } from 'src/app/models/coupon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-customer-coupons',
  templateUrl: './all-customer-coupons.component.html',
  styleUrls: ['./all-customer-coupons.component.css']
})
export class AllCustomerCouponsComponent implements OnInit {

  private allCoupons: Coupon[];

  constructor(private couponService: CouponService, private router: Router) { }

  ngOnInit() {
                let observable = this.couponService.getAllCustomerCoupons(parseInt(sessionStorage.getItem("userId")));
        observable.subscribe(coupons => {
          // alert("succes in bringing customr coupons");
            this.allCoupons = coupons}
        ); 
      
  }

  private goToProfile() : void {
    this.router.navigate(["/customerProfile"]);
  }

  private isActive(coupon:Coupon): boolean {
    if (coupon.couponStatus==="active"){
      return true;
    } else{
      return false;
    }
  }

}
