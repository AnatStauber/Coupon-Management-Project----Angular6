import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {

  // private newEmail : string;
  private company = new Company();

  constructor(private companyService: CompanyService) { }

  ngOnInit() {

    let observable = this.companyService.getCompany(parseInt(sessionStorage.getItem("userId")));
    observable.subscribe(currCompany => {
      this.company=currCompany;
      }
    ); 
  }
     
  public changeEmail() :void{

    // this.company.companyEmail=this.newEmail;
    let observable = this.companyService.updateCompany(this.company);
    observable.subscribe(changedEmail => {
      alert("email updated successfully");
      }
    ); 
  }
  }


