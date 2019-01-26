import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  private newPassword : string;
  private customer = new Customer();
  private company = new Company();

  constructor(private companyService: CompanyService, private customerService: CustomerService) { }

  ngOnInit() {

    if (sessionStorage.getItem("userType")==="Customer"){
      let observable = this.customerService.getCustomer(parseInt(sessionStorage.getItem("userId")));
    observable.subscribe(currCustomer => {
      this.customer=currCustomer;
      }
    ); 
  } 
  else{
    let observable = this.companyService.getCompany(parseInt(sessionStorage.getItem("userId")));
    observable.subscribe(currCompany => {
      this.company=currCompany;
      }
    ); 
  }
   
  }

  public changePassword() :void{

  if (sessionStorage.getItem("userType")==="Customer"){
    this.customer.customerPassword = this.newPassword;
        let observable = this.customerService.updateCustomer(this.customer);
    observable.subscribe(changedPassword => {
      alert("password changed successfully");
      }
    ); 
  } 
  else{
    this.company.companyPassword=this.newPassword;
    let observable = this.companyService.updateCompany(this.company);
    observable.subscribe(changedPassword => {
      alert("password changed successfully");
      }
    ); 
  }
  }
}
