import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLoginGuardService } from 'src/app/services/customer-login-guard.service';
import { CompanyLoginGuardService } from 'src/app/services/company-login-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private custLoginGuard :CustomerLoginGuardService, private compLoginGuard: CompanyLoginGuardService, private router: Router) { }

  ngOnInit() {
    
  }

    public isLoggedIn() : boolean {
    if (sessionStorage.getItem("isLoggedIn")==="true"){
      return true;
    }
  }

  public isCustLoggedIn() : boolean {
    if (sessionStorage.getItem("isLoggedIn")==="true" && sessionStorage.getItem("userType")==="Customer"){
      return true;
    }
  }
  
  public isCompanyLoggedIn() : boolean {
    if (sessionStorage.getItem("isLoggedIn")==="true" && sessionStorage.getItem("userType")==="Company"){
      return true;
    }
  }

  public logOut() : void {
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
}
