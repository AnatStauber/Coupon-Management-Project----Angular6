import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  public company = new Company();


  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {

    let ob = this.companyService.getCompany(parseInt(sessionStorage.getItem("userId")));
    ob.subscribe(currCompany => {
        this.company = currCompany}
    );
     }
  
  public companyActiveCoupon(): void {
    this.router.navigate(["userActiveCoupons"]);
    }
}

