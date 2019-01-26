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
import { ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { Purchase } from 'src/app/models/purchase';
var PurchaseComponent = /** @class */ (function () {
    function PurchaseComponent(activatedRoute, couponService) {
        this.activatedRoute = activatedRoute;
        this.couponService = couponService;
        this.coupon = new Coupon();
    }
    PurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.amount = 1;
        this.couponId = parseInt(this.activatedRoute.snapshot.params.couponId);
        var observable = this.couponService.getCoupon(this.couponId);
        observable.subscribe(function (gotCoupon) {
            _this.coupon = gotCoupon;
        }, function (err) {
            alert("Error! Status: " + err.status + ", Message: " + err.message);
        });
    };
    PurchaseComponent.prototype.increase = function () {
        this.amount += 1;
    };
    PurchaseComponent.prototype.decrease = function () {
        if (this.amount >= 1) {
            this.amount -= 1;
        }
        else {
            (this.amount = 0);
        }
    };
    PurchaseComponent.prototype.purchaseCoupon = function (amount) {
        this.purchase = new Purchase(0, this.couponId, amount);
    };
    PurchaseComponent = __decorate([
        Component({
            selector: 'app-purchase',
            templateUrl: './purchase.component.html',
            styleUrls: ['./purchase.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, CouponService])
    ], PurchaseComponent);
    return PurchaseComponent;
}());
export { PurchaseComponent };
//# sourceMappingURL=purchase.component.js.map