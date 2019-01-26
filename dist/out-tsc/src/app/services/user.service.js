var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.user = new User();
    }
    UserService.prototype.login = function (user) {
        return this.http.post("http://localhost:8080/COUPONS_PROJECT_SPRING/Login", user, { withCredentials: true });
        // .pipe(
        // tap(userInfo => {
        //     localStorage.setItem('userID', String(userInfo.userID));
        //     localStorage.setItem('userName', userInfo.name);
        //     localStorage.setItem('userEmail', userInfo.email);
        //     localStorage.setItem('userType', userInfo.userType);
        //     localStorage.setItem('loggedin', 'true'); }
        //     )) ;;
    };
    UserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map