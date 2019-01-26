import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CookiesServiceNew } from 'src/app/services/cookie-service-new.service';
import { Company } from 'src/app/models/company';
import { Customer } from 'src/app/models/customer';
import { CompanyService } from 'src/app/services/company.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent{
  

  public user = new User();
  private company= new Company();
  private customer= new Customer();

  // public credentials = new Credentials();

  constructor(private router: Router, private userService: UserService, 
    private companyService: CompanyService, 
    private customerService: CustomerService, 
    private cookieService: CookiesServiceNew ) { }

  public login(): void {
      const observable = this.userService.login(this.user);
    	observable.subscribe(loggedIn => {
        this.user = loggedIn;
        sessionStorage.setItem("isLoggedIn", "true"); 
        sessionStorage.setItem("userId", String(this.user.userId));
        sessionStorage.setItem("userType", this.user.userType);
        this.navigateAfterLogin();
        // this.cookieService.setCookie("isLoggedIn", "true", 1);
    }
    // , err => {
    //     alert("Error! Status: " + err.status + ", Message: " + err.message);
    // }
    ); 

  }

  public navigateAfterLogin () : void {
    if (this.user.userType === "Company"){
      this.router.navigate(["/companyProfile"]);
    }
    else{
      this.router.navigate(["home"]);
    }
  }
  
}

  
  

