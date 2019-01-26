import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { Purchase } from 'src/app/models/purchase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  public coupon = new Coupon();
  public amount : number;
  public couponId : number;
  public purchase : Purchase ;
  public customerId : number;


  constructor(private activatedRoute: ActivatedRoute, private couponService : CouponService) { }

  ngOnInit() {
    this.amount=1;
    this.customerId= Number(sessionStorage.getItem("userId"));
    this.couponId = parseInt(this.activatedRoute.snapshot.params.couponId);
    let observable = this.couponService.getCoupon(this.couponId);
    observable.subscribe(gotCoupon => {
      this.coupon = gotCoupon}
    ); 
  }

  public increase (): void {
    this.amount +=1;
  }

  public decrease():void {
    if (this.amount>=1){
      this.amount-=1;
  }
  else {
    (this.amount=0);
  }
}

public purchaseCoupon() :void {
  this.purchase = new Purchase(this.customerId, this.couponId, this.amount );
  
    const observable = this.couponService.purchase(this.purchase);
    observable.subscribe(purchased => {
      alert( 
        'congrats! enjoy your new coupon'); 
  });

}

}
