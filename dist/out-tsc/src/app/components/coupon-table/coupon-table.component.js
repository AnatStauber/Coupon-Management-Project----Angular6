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
import { CouponService } from 'src/app/services/coupon.service';
import { Router } from '@angular/router';
var CouponTableComponent = /** @class */ (function () {
    function CouponTableComponent(router, couponService) {
        this.router = router;
        this.couponService = couponService;
    }
    CouponTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observable = this.couponService.getAllActiveCoupons();
        observable.subscribe(function (coupons) {
            _this.allActiveCoupons = coupons;
        }, function (err) {
            alert("Error! Status: " + err.status + ", Message: " + err.message);
        });
    };
    CouponTableComponent.prototype.goToProfile = function (couponId) {
        //  this.coupon.couponId = couponId;
        this.router.navigate(["/couponProfile/" + couponId]);
    };
    CouponTableComponent = __decorate([
        Component({
            selector: 'app-coupon-table',
            templateUrl: './coupon-table.component.html',
            styleUrls: ['./coupon-table.component.css']
        }),
        __metadata("design:paramtypes", [Router, CouponService])
    ], CouponTableComponent);
    return CouponTableComponent;
}());
export { CouponTableComponent };
//# sourceMappingURL=coupon-table.component.js.map