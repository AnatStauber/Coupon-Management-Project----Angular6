import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { throwIfEmpty } from 'rxjs/operators';



@Component({
  selector: 'app-coupon-profile',
  templateUrl: './coupon-profile.component.html',
  styleUrls: ['./coupon-profile.component.css']
})
export class CouponProfileComponent implements OnInit {

  private coupon = new Coupon();
  private companyName : string;
  private couponStatus :string;

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private couponService : CouponService, private companyService: CompanyService) { }

  ngOnInit() {
    const couponId = parseInt(this.activatedRoute.snapshot.params.couponId);
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.couponStatus = queryParams['couponStatus']; 
      });
      if (this.couponStatus==="nonActive"){
        this.coupon = null;
      } else {
        let observable = this.couponService.getCoupon(couponId);
        observable.subscribe(gotCoupon => {
          this.coupon = gotCoupon;
          this.getCompanyName(Number(gotCoupon.comapnyId));}
          ); 
        }  
 }

  public goToPurchase() : void {
    this.router.navigate(["/purchase/" + this.coupon.couponId]);
  }

  private getCompanyName(companyId: number) : void {

    let observable = this.companyService.getCompany(companyId);
    observable.subscribe(gotCompany => {
      this.companyName = gotCompany.companyName;}
      , err=> {
        alert("Error! Status: " + err.status + ", Message: " + err.message);
      }
    );
    // return companyName;
  
  }

  private confirmDelete(): void {
    if (confirm("Are you sure you want to delete this coupon?")){
      this.deleteCoupon();
    }
  }
  
  private deleteCoupon(): void{
    let observable = this.couponService.deleteCoupon(this.coupon.couponId);
    observable.subscribe(deleted=> {
      alert("coupon #" +this.coupon.couponId + " was deleted successfully");}
     
    );
  }
  private isCompany(): boolean{
    if (sessionStorage.getItem("userType")==="Company"){
      return true;
    } else{
      return false;
    }
    }
  
}
