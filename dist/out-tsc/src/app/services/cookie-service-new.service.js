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
var CookiesServiceNew = /** @class */ (function () {
    function CookiesServiceNew() {
        this.isConsented = false;
    }
    /**
     * delete cookie
     * @param name
     */
    CookiesServiceNew.prototype.deleteCookie = function (name) {
        this.setCookie(name, '', -1);
    };
    /**
     * get cookie
     * @param {string} name
     * @returns {string}
     */
    // public getCookie(name: string) {
    //     const ca: Array<string> = document.cookie.split(';');
    //     const caLen: number = ca.length;
    //     const cookieName = `${name}=`;
    //     let c: string;
    //     for (let i  = 0; i < caLen; i += 1) {
    //         c = ca[i].replace(/^\s+/g, '');
    //         if (c.indexOf(cookieName) === 0) {
    //             return c.substring(cookieName.length, c.length);
    //         }
    //     }
    //     return '';
    // }
    CookiesServiceNew.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    /**
     * set cookie
     * @param {string} name
     * @param {string} value
     * @param {number} expireDays
     * @param {string} path
     */
    CookiesServiceNew.prototype.setCookie = function (name, value, expireDays, path) {
        if (path === void 0) { path = ''; }
        var d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        var cpath = path ? "; path=" + path : '';
        document.cookie = name + "=" + value + "; " + expires + cpath;
    };
    /**
     * consent
     * @param {boolean} isConsent
     * @param e
     * @param {string} COOKIE
     * @param {string} EXPIRE_DAYS
     * @returns {boolean}
     */
    CookiesServiceNew.prototype.consent = function (isConsent, e, COOKIE, EXPIRE_DAYS) {
        if (!isConsent) {
            return this.isConsented;
        }
        else if (isConsent) {
            this.setCookie(COOKIE, '1', EXPIRE_DAYS);
            this.isConsented = true;
            e.preventDefault();
        }
    };
    CookiesServiceNew = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], CookiesServiceNew);
    return CookiesServiceNew;
}());
export { CookiesServiceNew };
//# sourceMappingURL=cookie-service-new.service.js.map