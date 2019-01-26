var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ModalComponent } from './components/modal/modal.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { UserService } from './services/user.service';
import { CustomerService } from './services/customer.service';
import { CouponTableComponent } from './components/coupon-table/coupon-table.component';
import { CouponProfileComponent } from './components/coupon-profile/coupon-profile.component';
import { MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { CookiesServiceNew } from './services/cookie-service-new.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                ModalComponent,
                CouponTableComponent,
                CouponProfileComponent,
                PurchaseComponent,
            ],
            imports: [
                BrowserModule,
                FormsModule,
                RouterModule,
                RoutingModule,
                HttpClientModule,
                BrowserAnimationsModule,
                MatDialogModule
            ],
            providers: [UserService, CustomerService, CookiesServiceNew],
            bootstrap: [LayoutComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map