import { Component, OnInit } from '@angular/core';
// import { CouponService } from 'src/app/services/coupon.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  private minPrice : string;//="couponPrice";
  private maxPrice : string;//="couponPrice";
  private endDate : string;//="couponEndDate";
  private type : string;//="couponType";

  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
  
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      if (this.activatedRoute.snapshot.queryParams['type']) {
        this.type= queryParams['type'];
     } else {
      this.type = "couponType";
    }
     
        if (this.activatedRoute.snapshot.queryParams['endDate']) {
          this.endDate=  queryParams['endDate'];
       } else {
        this.endDate = "couponEndDate";
      }
   
        if (this.activatedRoute.snapshot.queryParams['minPrice']) {
          this.minPrice=  queryParams['minPrice']; 
       } else {
        this.minPrice = "couponPrice";
      }
  
        if (this.activatedRoute.snapshot.queryParams['maxPrice']) {
          this.maxPrice=  queryParams['maxPrice'];
      } else {
        this.maxPrice=  "couponPrice"; 
      }
});  
  }
   
   
  
  public NavigatePrices(): void{

    if (this.maxPrice==="CouponPrice" || this.minPrice==="CouponPrice"){
      if (this.endDate==="couponEndDate"){
      return;
    }    
  }
    this.router.navigate(['/byFilters'], { queryParams: {'type':this.type,'endDate': this.endDate, 'minPrice':this.minPrice, 'maxPrice':this.maxPrice  } });
  }

  }

