import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/site-layout/home/home.component';
import { LoginComponent } from './components/User Components/login/login.component';
import { RegisterComponent } from './components/Customer Only Components/register/register.component';
import { CouponTableComponent } from './components/Coupons Components/coupon-table/coupon-table.component';
import { CouponProfileComponent } from './components/Coupons Components/coupon-profile/coupon-profile.component';
import { PurchaseComponent } from './components/Customer Only Components/purchase/purchase.component';
import { CouponsByFiltersComponent } from './components/Coupons Components/coupons-by-filters/coupons-by-filters.component';
import { AddCouponComponent } from './components/Company Only Components/add-coupon/add-coupon.component';
import { UserActiveCouponsTableComponent } from './components/User Components/user-active-coupons-table/user-active-coupons-table.component';
import { CustomerProfileComponent } from './components/Customer Only Components/customer-profile/customer-profile.component';
import { AllCustomerCouponsComponent } from './components/Customer Only Components/all-customer-coupons/all-customer-coupons.component';
import { ChangePasswordComponent } from './components/User Components/change-password/change-password.component';
import { ChangeEmailComponent } from './components/Company Only Components/change-email/change-email.component';
import { UpdateCouponComponent } from './components/Company Only Components/update-coupon/update-coupon.component';
import { CompanyLoginGuardService } from './services/company-login-guard.service';
import { Page404Component } from './components/site-layout/page404/page404.component';
import { CustomerLoginGuardService } from './services/customer-login-guard.service';
import { LoginGuardService } from './services/login-guard.service';
import { CompanyProfileComponent } from './components/Company Only Components/company-profile/company-profile.component';



const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "login", /*canActivate: [LoginGuardService],*/ component: LoginComponent },
    { path: "register", /*canActivate: [LoginGuardService],*/ component: RegisterComponent },
    { path: "activeCouponsTable", component:CouponTableComponent },
    { path: "couponProfile/:couponId", component:CouponProfileComponent },
    { path: "purchase/:couponId",canActivate:[CustomerLoginGuardService], component:PurchaseComponent},
    // { path: "byType", component: CouponByTypeComponent, pathMatch: "full"},
    { path: "byFilters", component: CouponsByFiltersComponent},
    { path: "companyProfile",canActivate:[CompanyLoginGuardService], component: CompanyProfileComponent},
    { path: "addCoupon" , canActivate: [CompanyLoginGuardService],  component:AddCouponComponent},
    { path: "userActiveCoupons", canActivate: [LoginGuardService], component: UserActiveCouponsTableComponent},
    { path: "customerProfile",canActivate:[CustomerLoginGuardService], component:CustomerProfileComponent},
    { path: "customer/allcouponsTable",canActivate:[CustomerLoginGuardService], component:AllCustomerCouponsComponent},
    { path: "changePassword", canActivate: [LoginGuardService], component:ChangePasswordComponent},
    { path: "changeEmail",canActivate:[CompanyLoginGuardService], component: ChangeEmailComponent},
    { path: "updateCoupon/:couponId" ,canActivate:[CompanyLoginGuardService], component:UpdateCouponComponent},
    { path: "", redirectTo: "home", pathMatch: "full" }, // pathMatch = התאמת המחרוזת הריקה לכלל הנתיב
    { path: "**", component: Page404Component } // Page not Found (Must be the last one!!!)
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes,  { enableTracing: true, onSameUrlNavigation:"reload" }) // Importing the above routes
    ]
})
export class RoutingModule { }
