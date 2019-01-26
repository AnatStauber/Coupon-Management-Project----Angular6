import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  private minPrice="couponPrice";
  private maxPrice="couponPrice";
  private endDate="couponEndDate";
  // private type="couponType";

  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      // this.type = queryParams['type'];
      // if (queryParams['endDate'] === "undefined")  {
        if (this.activatedRoute.snapshot.queryParams['endDate']) {
          this.endDate=  queryParams['endDate'];
       } else {
        this.endDate = "couponEndDate";
      }
      // if (!queryParams['minPrice'])  {
        if (this.activatedRoute.snapshot.queryParams['minPrice']) {
          this.minPrice=  queryParams['minPrice']; 
       } else {
        this.minPrice = "couponPrice";
      }
      // if (!queryParams['maxPrice']) {
        if (this.activatedRoute.snapshot.queryParams['maxPrice']) {
          this.maxPrice=  queryParams['maxPrice'];
      } else {
        this.maxPrice=  "couponPrice"; 
      }
});  
  }

  public navigateFilters(type: string) : void {
    this.router.navigate(['/byFilters'], { queryParams: {'type':type,'endDate': this.endDate, 'minPrice':this.minPrice, 'maxPrice':this.maxPrice  } });
  }

  
}
