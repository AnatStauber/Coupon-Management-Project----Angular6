import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  private customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
  let ob = this.customerService.getCustomer(parseInt(sessionStorage.getItem("userId")));
    ob.subscribe(currCustomer => {
        this.customer = currCustomer});
     }
  
  public customerAllPurchasedCoupons(): void {
    this.router.navigate(["customer/allcouponsTable"]);
    }

    public customerActiveCoupons(): void {
      this.router.navigate(["userActiveCoupons"]);
      }

      public changePassword(): void {
        this.router.navigate(["changePassword"]);
      }
}





