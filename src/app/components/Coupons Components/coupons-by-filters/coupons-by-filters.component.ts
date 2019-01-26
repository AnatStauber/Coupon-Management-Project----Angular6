import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupons-by-filters',
  templateUrl: './coupons-by-filters.component.html',
  styleUrls: ['./coupons-by-filters.component.css']
})
export class CouponsByFiltersComponent implements OnInit {

  public coupons: Coupon[];
  public coupon: Coupon;
  public minPrice: string;
  public maxPrice: string;
  public endDate :string;
  public type : string;

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private couponService : CouponService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
               
              
                  this.minPrice = queryParams['minPrice'];  
                  this.maxPrice = queryParams['maxPrice'];
                  this.type = queryParams['type'];
                  this.endDate =  queryParams['endDate'];
               

                // alert ("couponByPrices component: "+ this.minPrice + this.maxPrice + this.endDate);
                // alert(this.maxPrice+ this.minPrice);
                let observable = this.couponService.getCouponsByFilters(this.type, this.endDate, this.minPrice, this.maxPrice) ;//this.activatedRoute.snapshot.queryParams.type);
                //  let observable =this.couponService.getCouponsByEndDate(this.endDate);
                observable.subscribe(filteredCoupons => {
                  // alert ("success in assigning new array of coupons");
                  this.coupons = filteredCoupons}
                ); 
                
    });  
  }
  public goToProfile(couponId: number) : void {
    //  this.coupon.couponId = couponId;
      this.router.navigate(["/couponProfile/" + couponId]);
    }
}