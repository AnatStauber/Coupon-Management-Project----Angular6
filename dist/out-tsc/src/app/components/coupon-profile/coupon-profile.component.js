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
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { ActivatedRoute, Router } from '@angular/router';
var CouponProfileComponent = /** @class */ (function () {
    function CouponProfileComponent(router, activatedRoute, couponService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.couponService = couponService;
        this.coupon = new Coupon();
    }
    CouponProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var couponId = parseInt(this.activatedRoute.snapshot.params.couponId);
        var observable = this.couponService.getCoupon(couponId);
        observable.subscribe(function (gotCoupon) {
            _this.coupon = gotCoupon;
        }, function (err) {
            alert("Error! Status: " + err.status + ", Message: " + err.message);
        });
    };
    CouponProfileComponent.prototype.goToPurchase = function () {
        this.router.navigate(["/purchase/" + this.coupon.couponId]);
    };
    CouponProfileComponent = __decorate([
        Component({
            selector: 'app-coupon-profile',
            templateUrl: './coupon-profile.component.html',
            styleUrls: ['./coupon-profile.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, CouponService])
    ], CouponProfileComponent);
    return CouponProfileComponent;
}());
export { CouponProfileComponent };
//# sourceMappingURL=coupon-profile.component.js.map