webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(169),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(_fb, _router, _userService) {
        this._fb = _fb;
        this._router = _router;
        this._userService = _userService;
        this._loginError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this._fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            remember: false
        });
    };
    LoginComponent.prototype.loginSubmit = function (form, valid) {
        var _this = this;
        //console.log(valid);
        if (valid) {
            //this._router.navigate(['albums']);
            this._userService.login(form)
                .subscribe(function (res) {
                //console.log(res);
                if (res.success) {
                    _this._userService.storeAuthToken(res.user, res.token);
                    _this._router.navigate(['profile/' + res.user.username]);
                }
                else {
                    _this._loginError = true;
                    _this._router.navigate(['login']);
                }
            });
            //console.log(form);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(170),
        styles: [__webpack_require__(162)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this._userService.logout();
        this._router.navigate(['']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(171),
        styles: [__webpack_require__(163)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.user = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getProfile()
            .subscribe(function (profile) {
            //console.log(profile);
            _this.user = profile.user;
            _this._userService.setUser(profile.user);
        }, function (err) {
            //console.error(err);
            _this._router.navigate(['login']);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(172),
        styles: [__webpack_require__(164)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(_fb, _router, _userService) {
        this._fb = _fb;
        this._router = _router;
        this._userService = _userService;
        this._passwordNotMatched = false;
        this._registered = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registrationForm = this._fb.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5)]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5)]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[A-Za-z0-9]*')]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8)]],
            confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8)]]
        });
    };
    RegisterComponent.prototype.onSubmit = function (form, valid) {
        var _this = this;
        if (valid) {
            if (form.password == form.confirmPassword) {
                this._passwordNotMatched = false;
                //this._router.navigate(['login']);
                // Check at the backend if such a user exists
                this._newUser = {
                    username: form.username,
                    firstName: form.firstName,
                    lastName: form.lastName,
                    email: form.email,
                    password: form.password
                };
                this._userService.register(this._newUser)
                    .subscribe(function (res) {
                    if (res.success) {
                        _this._registered = true;
                        _this._router.navigate(['login']);
                    }
                    else {
                        console.log("Error in registering the user");
                        _this._router.navigate(['register']);
                    }
                });
                this._newUser = null;
            }
            else {
                this._passwordNotMatched = true;
                //console.log('Entered Password does not match');
            }
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(173),
        styles: [__webpack_require__(165)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/*\n * Base structure\n */\n\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 50px;\n}\n\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n.main .page-header {\n  margin-top: 0;\n}\n\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n.placeholders h4 {\n  margin-bottom: 0;\n}\n.placeholder {\n  margin-bottom: 20px;\n}\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "body {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #eee;\n}\n\n.form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n.form-signin .checkbox {\n  font-weight: normal;\n}\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <ul class=\"nav nav-sidebar\">\n            <li class=\"active\"><a href=\"\">Overview <span class=\"sr-only\">(current)</span></a></li>\n            <li><a href=\"\">Reports</a></li>\n            <li><a href=\"\">Analytics</a></li>\n            <li><a href=\"\">Export</a></li>\n          </ul>\n          <ul class=\"nav nav-sidebar\">\n            <li><a href=\"\">Nav item</a></li>\n            <li><a href=\"\">Nav item again</a></li>\n            <li><a href=\"\">One more nav</a></li>\n            <li><a href=\"\">Another nav item</a></li>\n            <li><a href=\"\">More navigation</a></li>\n          </ul>\n          <ul class=\"nav nav-sidebar\">\n            <li><a href=\"\">Nav item again</a></li>\n            <li><a href=\"\">One more nav</a></li>\n            <li><a href=\"\">Another nav item</a></li>\n          </ul>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n          <h1 class=\"page-header\">Dashboard</h1>\n\n          <div class=\"row placeholders\">\n            <div class=\"col-xs-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <span class=\"text-muted\">Something else</span>\n            </div>\n            <div class=\"col-xs-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <span class=\"text-muted\">Something else</span>\n            </div>\n            <div class=\"col-xs-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <span class=\"text-muted\">Something else</span>\n            </div>\n            <div class=\"col-xs-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <span class=\"text-muted\">Something else</span>\n            </div>\n          </div>\n\n          <h2 class=\"sub-header\">Section title</h2>\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Header</th>\n                  <th>Header</th>\n                  <th>Header</th>\n                  <th>Header</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>1,001</td>\n                  <td>Lorem</td>\n                  <td>ipsum</td>\n                  <td>dolor</td>\n                  <td>sit</td>\n                </tr>\n                <tr>\n                  <td>1,002</td>\n                  <td>amet</td>\n                  <td>consectetur</td>\n                  <td>adipiscing</td>\n                  <td>elit</td>\n                </tr>\n                <tr>\n                  <td>1,003</td>\n                  <td>Integer</td>\n                  <td>nec</td>\n                  <td>odio</td>\n                  <td>Praesent</td>\n                </tr>\n                <tr>\n                  <td>1,003</td>\n                  <td>libero</td>\n                  <td>Sed</td>\n                  <td>cursus</td>\n                  <td>ante</td>\n                </tr>\n                <tr>\n                  <td>1,004</td>\n                  <td>dapibus</td>\n                  <td>diam</td>\n                  <td>Sed</td>\n                  <td>nisi</td>\n                </tr>\n                <tr>\n                  <td>1,005</td>\n                  <td>Nulla</td>\n                  <td>quis</td>\n                  <td>sem</td>\n                  <td>at</td>\n                </tr>\n                <tr>\n                  <td>1,006</td>\n                  <td>nibh</td>\n                  <td>elementum</td>\n                  <td>imperdiet</td>\n                  <td>Duis</td>\n                </tr>\n                <tr>\n                  <td>1,007</td>\n                  <td>sagittis</td>\n                  <td>ipsum</td>\n                  <td>Praesent</td>\n                  <td>mauris</td>\n                </tr>\n                <tr>\n                  <td>1,008</td>\n                  <td>Fusce</td>\n                  <td>nec</td>\n                  <td>tellus</td>\n                  <td>sed</td>\n                </tr>\n                <tr>\n                  <td>1,009</td>\n                  <td>augue</td>\n                  <td>semper</td>\n                  <td>porta</td>\n                  <td>Mauris</td>\n                </tr>\n                <tr>\n                  <td>1,010</td>\n                  <td>massa</td>\n                  <td>Vestibulum</td>\n                  <td>lacinia</td>\n                  <td>arcu</td>\n                </tr>\n                <tr>\n                  <td>1,011</td>\n                  <td>eget</td>\n                  <td>nulla</td>\n                  <td>Class</td>\n                  <td>aptent</td>\n                </tr>\n                <tr>\n                  <td>1,012</td>\n                  <td>taciti</td>\n                  <td>sociosqu</td>\n                  <td>ad</td>\n                  <td>litora</td>\n                </tr>\n                <tr>\n                  <td>1,013</td>\n                  <td>torquent</td>\n                  <td>per</td>\n                  <td>conubia</td>\n                  <td>nostra</td>\n                </tr>\n                <tr>\n                  <td>1,014</td>\n                  <td>per</td>\n                  <td>inceptos</td>\n                  <td>himenaeos</td>\n                  <td>Curabitur</td>\n                </tr>\n                <tr>\n                  <td>1,015</td>\n                  <td>sodales</td>\n                  <td>ligula</td>\n                  <td>in</td>\n                  <td>libero</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h1>MEAN Stack Auth app</h1>\n    <p>This is a simple MEAN Stack App for Authentication.</p>\n    <p>\n      <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/login']\" role=\"button\">Login</a>\n      <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/register']\" role=\"button\">Register</a>\n    </p>\n  </div>\n</div>\n\n  <div class=\"container\">\n      <!-- Example row of columns -->\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div>\n        <div class=\"col-md-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n       </div>\n        <div class=\"col-md-4\">\n          <h2>Heading</h2>\n          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div>\n      </div>\n\n      <hr>\n\n      <footer>\n        <p>&copy; 2016 Company, Inc.</p>\n      </footer>\n</div> <!-- /container -->"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n      <form class=\"form-signin\" [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"loginSubmit(loginForm.value, loginForm.valid)\">\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\n          <div \n            class=\"alert alert-danger\" \n            *ngIf=\"_loginError\">\n              Username or Password is Incorrect\n          </div>\n        <label for=\"username\" class=\"sr-only\">Username</label>\n        <input \n          formControlName = \"username\"\n          type=\"username\" \n          class=\"form-control\" \n          placeholder=\"Username\" \n          name=\"username\"\n          required \n          autofocus>\n\n       \n       <label for=\"password\" class=\"sr-only\">Password</label>\n        <input \n          formControlName = \"password\"\n          type=\"password\" \n          class=\"form-control\" \n          name=\"password\" \n          placeholder=\"Password\" \n          required>\n        \n        <div class=\"checkbox\">\n          <label>\n            <input \n              formControlName = \"remember\"\n              type=\"checkbox\" \n              value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n      </form>\n\n</div> <!-- /container -->"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<nav style=\"margin:0px\" class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" style=\"outline:none\" [routerLink]=\"['/']\">NodeAuth</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a style=\"outline:none\" [routerLink]=\"['/']\">Home</a></li>\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!_userService.loggedIn()\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a style=\"outline:none\" [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!_userService.loggedIn()\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a style=\"outline:none\" [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"_userService.loggedIn()\" class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Account <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n            <li><a [routerLink]=\"['/profile',_userService.getStoredUser().username]\">Profile</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a (click)=\"logout()\" href=\"#\">Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">Hello, {{user.firstName}}</h2>\n  <ul class = 'list-group'>\n    <li class='list-group-item'>{{user.username}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:30px\" class=\"container\">\n    <div class=\"row\">\n        <form [formGroup]=\"registrationForm\" novalidate (ngSubmit)=\"onSubmit(registrationForm.value, registrationForm.valid)\">\n            <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                    <label for=\"firstName\">First Name</label>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-user\"></span></span>\n                        <input\n                          formControlName=\"firstName\"\n                          type=\"text\" \n                          class=\"form-control\" \n                          name=\"firstName\" \n                          placeholder=\"First Name\" \n                          required>\n                    </div>\n                    <div *ngIf=\"registrationForm.controls.firstName.touched && registrationForm.controls.firstName.errors\">\n                    <div \n                      class=\"alert alert-danger\" \n                      *ngIf=\"registrationForm.controls.firstName.errors.required\">\n                      <span class=\"glyphicon glyphicon-remove\"></span><strong>Please enter your name.</strong>\n                    </div>\n                    <div \n                          class=\"alert alert-danger\" \n                          *ngIf=\"registrationForm.controls.firstName.errors.minlength\">\n                          <span class=\"glyphicon glyphicon-remove\"></span><strong>Minimun length required is 5.</strong>\n                      </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"lastName\">Last Name</label>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-user\"></span></span>\n                        <input \n                          formControlName=\"lastName\"\n                          type=\"text\" \n                          class=\"form-control\" \n                          name=\"lastName\" \n                          placeholder=\"Last Name\" \n                          required>\n                    </div>\n                    <div *ngIf=\"registrationForm.controls.lastName.touched && registrationForm.controls.lastName.errors\">\n                      <div \n                          class=\"alert alert-danger\" \n                          *ngIf=\"registrationForm.controls.lastName.errors.required\">\n                          <span class=\"glyphicon glyphicon-remove\"></span><strong>Please enter your last name.</strong>\n                      </div>\n                      <div \n                          class=\"alert alert-danger\" \n                          *ngIf=\"registrationForm.controls.lastName.errors.minlength\">\n                          <span class=\"glyphicon glyphicon-remove\"></span><strong>Minimun length required is 5.</strong>\n                      </div>\n                   </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-user\"></span></span>\n                        <input\n                          formControlName=\"username\" \n                          type=\"name\" \n                          class=\"form-control\" \n                          name=\"username\" \n                          placeholder=\"Enter Username\" \n                          required\n                          pattern>\n                    </div>\n                    <div *ngIf=\"registrationForm.controls.username.touched && registrationForm.controls.username.errors\">\n                      <div \n                          class=\"alert alert-danger\" \n                          *ngIf=\"registrationForm.controls.username.errors.required\">\n                          <span class=\"glyphicon glyphicon-remove\"></span><strong>Please enter username.</strong>\n                      </div>\n                      <div \n                       class=\"alert alert-danger\" \n                       *ngIf=\"registrationForm.controls.username.errors.minlength\">\n                        <span class=\"glyphicon glyphicon-remove\"></span><strong>Minimun length required is 3.</strong>\n                      </div>\n                      <div \n                       class=\"alert alert-danger\" \n                       *ngIf=\"registrationForm.controls.username.errors.pattern\">\n                        <span class=\"glyphicon glyphicon-remove\"></span><strong>Please enter characters from A-Z or a-z or 0-9</strong>\n                      </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-envelope\"></span></span>\n                        <input\n                          formControlName=\"email\" \n                          type=\"email\" \n                          class=\"form-control\" \n                          name=\"email\" \n                          placeholder=\"Enter Email\" \n                          required>\n                    </div>\n                    <div *ngIf=\"registrationForm.controls.email.touched && registrationForm.controls.email.errors\">\n                      <div \n                          class=\"alert alert-danger\" \n                          *ngIf=\"registrationForm.controls.email.errors.required\">\n                          <span class=\"glyphicon glyphicon-remove\"></span><strong>Please enter your name.</strong>\n                      </div>\n                      <div \n                       class=\"alert alert-danger\" \n                       *ngIf=\"registrationForm.controls.email.errors.email\">\n                        <span class=\"glyphicon glyphicon-remove\"></span><strong>Please enter valid email address.</strong>\n                      </div>\n                  </div>                    \n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Enter Password</label>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-asterisk\"></span></span>\n                        <input \n                          formControlName=\"password\"\n                          type=\"password\" \n                          class=\"form-control\" \n                          name=\"password\" \n                          placeholder=\"Enter Password\" \n                          required>\n                    </div>\n                    <div *ngIf=\"registrationForm.controls.password.touched && registrationForm.controls.password.errors\">\n                      <div \n                          class=\"alert alert-danger\" \n                          *ngIf=\"registrationForm.controls.password.errors.required\">\n                          <span class=\"glyphicon glyphicon-remove\"></span><strong>Please enter a password.</strong>\n                      </div>\n                      <div \n                       class=\"alert alert-danger\" \n                       *ngIf=\"registrationForm.controls.password.errors.minlength\">\n                        <span class=\"glyphicon glyphicon-remove\"></span><strong>Minimun length required is 8.</strong>\n                      </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"confirmPassword\">Confirm Password</label>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-asterisk\"></span></span>\n                        <input \n                          formControlName=\"confirmPassword\"\n                          type=\"password\" \n                          class=\"form-control\" \n                          name=\"confirmPassword\" \n                          placeholder=\"Confirm Password\" \n                          required>\n                    </div>\n                    <div *ngIf=\"registrationForm.controls.confirmPassword.touched && registrationForm.controls.confirmPassword.errors\">\n                      <div \n                          class=\"alert alert-danger\" \n                          *ngIf=\"registrationForm.controls.confirmPassword.errors.required\">\n                          <span class=\"glyphicon glyphicon-remove\"></span><strong>Please confirm paswword.</strong>\n                      </div>\n                      <div \n                       class=\"alert alert-danger\" \n                       *ngIf=\"registrationForm.controls.confirmPassword.errors.minlength\">\n                        <span class=\"glyphicon glyphicon-remove\"></span><strong>Minimun length required is 8.</strong>\n                      </div>\n                  </div>\n                  <div \n                    class=\"alert alert-danger\" \n                    *ngIf=\"_passwordNotMatched\">\n                    <span class=\"glyphicon glyphicon-remove\"></span><strong>Passwords dont match.</strong>\n                  </div>\n                </div>\n                <input type=\"submit\" name=\"submit\" value=\"Register\" class=\"btn btn-info pull-right\">\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].URL;
        this._loggedIn = false;
    }
    UserService.prototype.register = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this._url + "/users/register", user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.storeAuthToken = function (user, token) {
        this._user = user;
        this._authToken = token;
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user)); //local storage can only store strings
    };
    UserService.prototype.getStoredUser = function () {
        this._user = JSON.parse(localStorage.getItem('user')); //local storage can only store strings
        return this._user;
    };
    UserService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    UserService.prototype.login = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this._url + "/users/authenticate", user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.setUser = function (user) {
        this._user = user;
    };
    UserService.prototype.logout = function () {
        this._authToken = null;
        this._user = null;
        this._loggedIn = false;
        localStorage.clear();
    };
    UserService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.loadToken();
        headers.append('Authorization', this._authToken);
        return this._http.get(this._url + "/users/profile", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.loadToken = function () {
        this._authToken = localStorage.getItem('id_token');
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    //URL: '' //For Heroku production
    URL: 'http://localhost:8080',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 90;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(68);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(167),
        styles: [__webpack_require__(159)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_guard_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// Route Guards

// Services

//Router Configuration
var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__auth_guard_service__["a" /* AuthGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_userService, router) {
        this._userService = _userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._userService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(168),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.bundle.js.map