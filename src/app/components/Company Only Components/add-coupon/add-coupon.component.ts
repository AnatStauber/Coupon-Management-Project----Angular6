import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/services/coupon.service';
import { Coupon } from 'src/app/models/coupon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  private couponTypes : String[];
  private coupon = new Coupon();

  constructor(private router: Router, private couponService: CouponService) { }

  ngOnInit() {
    this.coupon.comapnyId= parseInt(sessionStorage.getItem("userId"));
    const observable = this.couponService.getCouponTypes();
    observable.subscribe(types => {
      this.couponTypes=types;
      }, err => {
      alert("Error! Status: " + err.status + ", Message: " + err.message);
  });
  }  

  public addCoupon(): void {
    
    const observable = this.couponService.addCoupon(this.coupon);
    observable.subscribe(couponAdded => {
        this.goToProfile(couponAdded.couponId);
    });

  }
  
  public goToProfile(couponId: number) : void {
    //  this.coupon.couponId = couponId;
      this.router.navigate(["/couponProfile/" + couponId]);
    }
}
