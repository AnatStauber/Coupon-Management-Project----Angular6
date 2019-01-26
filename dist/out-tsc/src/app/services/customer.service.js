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
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/customer';
var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.customer = new Customer();
    }
    CustomerService.prototype.register = function (customer) {
        return this.http.post("http://localhost:8080/COUPONS_PROJECT_SPRING/register", customer, { withCredentials: true });
        // .catch(this.handleError);
    };
    CustomerService.prototype.getAllCustomers = function () {
        return this.http.get("http://localhost:8080/COUPONS_PROJECT_SPRING/customers/getAll", { withCredentials: true });
    };
    CustomerService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], CustomerService);
    return CustomerService;
}());
export { CustomerService };
//# sourceMappingURL=customer.service.js.map