import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private user = new User();

  constructor (private http: HttpClient) { }

  public login(user: User): Observable<User> {
    return this.http.post<User>("http://localhost:8080/COUPONS_PROJECT_SPRING/Login", user, { withCredentials: true });
    // .pipe(
      // tap(userInfo => {
      //     localStorage.setItem('userID', String(userInfo.userID));
      //     localStorage.setItem('userName', userInfo.name);
      //     localStorage.setItem('userEmail', userInfo.email);
      //     localStorage.setItem('userType', userInfo.userType);
      //     localStorage.setItem('loggedin', 'true'); }
      //     )) ;;
  }


 

}
