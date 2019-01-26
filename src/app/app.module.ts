import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { UserService } from './services/user.service';
import { CustomerService } from './services/customer.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CookiesServiceNew } from './services/cookie-service-new.service';
import { LayoutComponent } from './components/site-layout/layout/layout.component';
import { HeaderComponent } from './components/site-layout/header/header.component';
import { MenuComponent } from './components/site-layout/menu/menu.component';
import { HomeComponent } from './components/site-layout/home/home.component';
import { FooterComponent } from './components/site-layout/footer/footer.component';
import { LoginComponent } from './components/User Components/login/login.component';
import { RegisterComponent } from './components/Customer Only Components/register/register.component';
import { SideBarComponent } from './components/site-layout/side-bar/side-bar.component';
import { CouponTableComponent } from './components/Coupons Components/coupon-table/coupon-table.component';
import { CouponProfileComponent } from './components/Coupons Components/coupon-profile/coupon-profile.component';
import { PurchaseComponent } from './components/Customer Only Components/purchase/purchase.component';
import { CouponsByFiltersComponent } from './components/Coupons Components/coupons-by-filters/coupons-by-filters.component';
import { AddCouponComponent } from './components/Company Only Components/add-coupon/add-coupon.component';
import { UserActiveCouponsTableComponent } from './components/User Components/user-active-coupons-table/user-active-coupons-table.component';
import { CustomerProfileComponent } from './components/Customer Only Components/customer-profile/customer-profile.component';
import { ChangePasswordComponent } from './components/User Components/change-password/change-password.component';
import { AllCustomerCouponsComponent } from './components/Customer Only Components/all-customer-coupons/all-customer-coupons.component';
import { ChangeEmailComponent } from './components/Company Only Components/change-email/change-email.component';
import { UpdateCouponComponent } from './components/Company Only Components/update-coupon/update-coupon.component';
import { Page404Component } from './components/site-layout/page404/page404.component';
import { CompanyProfileComponent } from './components/Company Only Components/company-profile/company-profile.component';
import { HttpErrorInterceptor } from './http-error.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SideBarComponent,
    CouponTableComponent,
    CouponProfileComponent,
    PurchaseComponent,
    CouponsByFiltersComponent,
    AddCouponComponent,
    CompanyProfileComponent,
    UserActiveCouponsTableComponent,
    CustomerProfileComponent,
    ChangePasswordComponent,
    AllCustomerCouponsComponent,
    ChangeEmailComponent,
    UpdateCouponComponent,
    Page404Component,
    


    
    
  ],
  imports: [
    BrowserModule,
        FormsModule, // Needed for ngModel
        RouterModule, // Needed for the routing mechanism
        RoutingModule, // Needed for the routing mechanism
        HttpClientModule,
        BrowserAnimationsModule,

  ],
  providers: [ UserService, CustomerService, CookiesServiceNew, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],

  bootstrap: [LayoutComponent]
})

export class AppModule { }
