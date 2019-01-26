var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CookiesServiceNew } from 'src/app/services/cookie-service-new.service';
import { CompanyService } from 'src/app/services/company.service';
import { CustomerService } from 'src/app/services/customer.service';
var LoginComponent = /** @class */ (function () {
    // public credentials = new Credentials();
    function LoginComponent(userService, companyService, CustomerService, cookieService) {
        this.userService = userService;
        this.companyService = companyService;
        this.CustomerService = CustomerService;
        this.cookieService = cookieService;
        this.user = new User();
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        // alert(`ID: ${this.user.id}, Name: ${this.user.name}, Username: ${this.user.username}, Email: ${this.user.email} `); // Before sending.
        var observable = this.userService.login(this.user);
        observable.subscribe(function (loggedIn) {
            alert(// The returned data from the server.
            // `UserId: ${loggedIn.UserId}`);
            "success " + _this.user.userType);
            _this.user = loggedIn;
            _this.processData();
        }, function (err) {
            alert("Error! Status: " + err.status + ", Message: " + err.message);
        });
    };
    LoginComponent.prototype.processData = function () {
        if (this.user.userType === "Company") {
            sessionStorage.setItem("userType", "Company");
            this.getCompany();
            sessionStorage.setItem("userId", String(this.company.companyId));
        }
        else if (this.user.userType === "Customer") {
            sessionStorage.setItem("userType", "Customer");
            this.getCustomer();
            sessionStorage.setItem("userId", String(this.customer.customerId));
        }
        sessionStorage.setItem("isLoggedIn", "true");
    };
    LoginComponent.prototype.getCompany = function () {
        var _this = this;
        var observable = this.companyService.getAllCompanies();
        observable.subscribe(function (allCompanies) {
            _this.company = allCompanies.find(function (c) { return c.companyName == _this.user.userName; });
            alert(_this.company.companyId);
        }, function (err) {
            alert("Error! Status: " + err.status + ", Message: " + err.message);
        });
    };
    LoginComponent.prototype.getCustomer = function () {
        var _this = this;
        var observable = this.CustomerService.getAllCustomers();
        observable.subscribe(function (allCustomers) {
            _this.customer = allCustomers.find(function (c) { return c.customerName == _this.user.userName; });
            alert(_this.customer.customerId);
        }, function (err) {
            alert("Error! Status: " + err.status + ", Message: " + err.message);
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: [UserService]
        }),
        __metadata("design:paramtypes", [UserService,
            CompanyService,
            CustomerService,
            CookiesServiceNew])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map