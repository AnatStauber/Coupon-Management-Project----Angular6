import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { Router, ActivatedRoute } from '@angular/router';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  private couponTypes : String[];
  private coupon :Coupon;

  constructor(private activatedRoute:ActivatedRoute, private router: Router, private couponService: CouponService) { }

  ngOnInit() {
    
    const observable1= this.couponService.getCoupon(parseInt(this.activatedRoute.snapshot.params.couponId));
    observable1.subscribe(currCoupon => {
      this.coupon=currCoupon;
      }, err => {
      alert("Error! Status: " + err.status + ", Message: " + err.message);
  });
   
    const observable = this.couponService.getCouponTypes();
    observable.subscribe(types => {
      this.couponTypes=types;
      }, err => {
      alert("Error! Status: " + err.status + ", Message: " + err.message);
  });
  }  

  public updateCoupon(): void {
     const observable = this.couponService.updateCoupon(this.coupon);
    observable.subscribe(couponUpdated => {
      alert ("YAY! your coupon was updated successfuLly!")
        this.goToProfile();
    });

  }
  
  public goToProfile() : void {
    //  this.coupon.couponId = couponId;
      this.router.navigate(["/couponProfile/" + this.coupon.couponId]);
    }
}

