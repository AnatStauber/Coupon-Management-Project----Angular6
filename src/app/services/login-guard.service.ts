import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(private router: Router) { }

  public canActivate(): boolean {

    // const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if(sessionStorage.getItem("isLoggedIn")) {
        return true;
    }
    else{
      alert( "your access to this page has been denied. You must log-in first.");
      this.router.navigate(["/login"]);

    return false;
    }
  }
}
