var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CouponTableComponent } from "./components/coupon-table/coupon-table.component";
import { CouponProfileComponent } from "./components/coupon-profile/coupon-profile.component";
import { PurchaseComponent } from "./components/purchase/purchase.component";
var routes = [
    { path: "home", component: HomeComponent },
    { path: "login", /*canActivate: [LoginGuardService],*/ component: LoginComponent },
    { path: "register", /*canActivate: [LoginGuardService],*/ component: RegisterComponent },
    { path: "activeCouponTable", component: CouponTableComponent },
    { path: "couponProfile/:couponId", component: CouponProfileComponent },
    { path: "purchase/:couponId", component: PurchaseComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule,
                RouterModule.forRoot(routes, { enableTracing: true }) // Importing the above routes
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());
export { RoutingModule };
//# sourceMappingURL=routing.module.js.map