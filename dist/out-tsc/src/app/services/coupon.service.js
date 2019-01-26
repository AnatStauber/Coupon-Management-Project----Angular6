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
import { Coupon } from '../models/coupon';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../models/purchase';
var CouponService = /** @class */ (function () {
    function CouponService(http) {
        this.http = http;
        this.coupon = new Coupon();
        this.purchaseDetails = new Purchase();
    }
    CouponService.prototype.getAllActiveCoupons = function () {
        return this.http.get("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/activeCoupons", { withCredentials: true });
    };
    CouponService.prototype.getCoupon = function (couponId) {
        return this.http.get("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/" + couponId, { withCredentials: true });
    };
    CouponService.prototype.purchase = function (purchaseDetails) {
        return this.http.post("http://localhost:8080/COUPONS_PROJECT_SPRING/coupons/purchaseCoupon", purchaseDetails, { withCredentials: true });
    };
    CouponService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], CouponService);
    return CouponService;
}());
export { CouponService };
//# sourceMappingURL=coupon.service.js.map