import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CompanyLoginGuardService implements CanActivate {

  constructor(private router: Router) { }

  public canActivate(): boolean {

    // const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if(sessionStorage.getItem("isLoggedIn") && sessionStorage.getItem("userType")==="Company") {
        return true;
    }
else{
    alert( "your access to this page has been denied.This page is restricted to logged-in companies only. ")
    this.router.navigate(["/home"]);

    return false;
}
}
}
