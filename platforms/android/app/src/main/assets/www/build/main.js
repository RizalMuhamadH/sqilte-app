webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListingPage = /** @class */ (function () {
    function ListingPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
    }
    ListingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.database.getAllUsers().then(function (data) {
            console.log(data);
            _this.list = data;
        }, function (error) {
            console.log(error);
        });
        console.log('ionViewDidLoad ListingPage');
    };
    ListingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listing',template:/*ion-inline-start:"D:\Android\Android Hybrid\ionic\src\pages\listing\listing.html"*/'<!--\n  Generated template for the ListingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>listing</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let user of list">\n      <ion-item>\n        <h2>{{user.name}}</h2>\n        <p>{{user.identification}}</p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary">\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary">\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary">\n          <ion-icon name="mail"></ion-icon>\n          Email\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"D:\Android\Android Hybrid\ionic\src\pages\listing\listing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], ListingPage);
    return ListingPage;
}());

//# sourceMappingURL=listing.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/listing/listing.module": [
		274,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listing_listing__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_database_database__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, database) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.database = database;
    }
    HomePage.prototype.addUsers = function () {
        var _this = this;
        var user = {
            identification: this.identification,
            name: this.name,
            email: this.email
        };
        this.database.createUser(user.identification, user.name, user.email).then(function (data) {
            _this.identification = null;
            _this.name = '';
            _this.email = '';
            var toast = _this.toastCtrl.create({
                message: "Success Add User",
                duration: 2000,
                position: 'bottom'
            });
            toast.present(toast);
            console.log(data);
            // this.showToast('Success Add User');
        }, function (error) {
            console.log(error);
            _this.showToast('Failed Add User');
        });
    };
    HomePage.prototype.moveToPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__listing_listing__["a" /* ListingPage */]);
    };
    HomePage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'bottom'
        });
        toast.present(toast);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Android\Android Hybrid\ionic\src\pages\home\home.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="moveToPage()" color="royal"  >\n        <ion-icon name="person"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (ngSubmit)="addUsers()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>\n          Identification\n        </ion-label>\n        <ion-input [(ngModel)]="identification" name="Identification" type="number">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          Name\n        </ion-label>\n        <ion-input [(ngModel)]="name" name="Name" type="text">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          Email\n        </ion-label>\n        <ion-input [(ngModel)]="email" name="email" type="email">\n        </ion-input>\n      </ion-item>\n      <button class="margin_button" ion-button type="submit" block round>Add User</button>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\Android\Android Hybrid\ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_database_database__["a" /* DatabaseProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_listing_listing__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database_database__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_listing_listing__["a" /* ListingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/listing/listing.module#ListingPageModule', name: 'ListingPage', segment: 'listing', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_listing_listing__["a" /* ListingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Android\Android Hybrid\ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Android\Android Hybrid\ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        if (!this.isOpen) {
            this.storage = new __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]();
            this.storage.create({ name: "db_data.db", location: "default" }).then(function (db) {
                _this.db = db;
                db.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, identification INTEGER, name TEXT, email TEXT)", []);
                _this.isOpen = true;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
    DatabaseProvider.prototype.createUser = function (identification, name, email) {
        var _this = this;
        return new Promise(function (respone, reject) {
            var sql = "INSERT INTO users (identification, name, email) VALUES (?, ?, ?)";
            _this.db.executeSql(sql, [identification, name, email]).then(function (data) {
                respone(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.getAllUsers = function () {
        var _this = this;
        return new Promise(function (respone, reject) {
            _this.db.executeSql("SELECT * FROM users", []).then(function (data) {
                var users = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        users.push({
                            id: data.rows.item(i).id,
                            identification: data.rows.item(i).identification,
                            name: data.rows.item(i).name,
                            email: data.rows.item(i).email
                        });
                    }
                }
                respone(users);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map