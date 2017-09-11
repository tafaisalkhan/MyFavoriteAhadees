webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaConstantProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
  Generated class for the DuaConstantProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DuaConstantProvider = (function () {
    function DuaConstantProvider() {
    }
    return DuaConstantProvider;
}());
DuaConstantProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], DuaConstantProvider);

//# sourceMappingURL=dua-constant.js.map

/***/ }),

/***/ 182:
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
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 225:
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
webpackEmptyAsyncContext.id = 225;

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_side_menu_side_menu__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__components_side_menu_side_menu__["a" /* SideMenuComponent */]);
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/fkhan/Desktop/MyFavoriteDua/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title>My Favorite Dua </ion-title>\n\n    <ion-buttons end>\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding style="padding: 0px; background-color:whitesmoke">\n\n   \n\n      <ion-card style="background-color: lightgreen ; font-family: monospace">\n            <ion-card-content style="font-size: x-large;">\n            Quranic Dua\n            </ion-card-content>\n      \n      </ion-card>\n\n\n      <ion-card style="background-color: lightgreen ; font-family: monospace">\n             <ion-card-content style="font-size: x-large;">\n             Ahadees Dua\n            </ion-card-content>\n          \n      </ion-card>\n\n   \n</ion-content>'/*ion-inline-end:"/Users/fkhan/Desktop/MyFavoriteDua/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_menu_main_menu__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_setting__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorite_favorite__ = __webpack_require__(334);
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
 * Generated class for the SideMenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SideMenuComponent = (function () {
    function SideMenuComponent(navCtrl) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__main_menu_main_menu__["a" /* MainMenuComponent */];
        console.log('Hello SideMenuComponent Component');
        this.text = 'Hello World';
        //this.nav.setRoot(DuaListComponent);
    }
    SideMenuComponent.prototype.openPage = function (page) {
        if (page == 'mainMenu') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__main_menu_main_menu__["a" /* MainMenuComponent */]);
        }
        else if (page == 'setting') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__setting_setting__["a" /* SettingComponent */]);
        }
        else if (page == 'favorite') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__favorite_favorite__["a" /* FavoriteComponent */]);
        }
    };
    return SideMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], SideMenuComponent.prototype, "nav", void 0);
SideMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'side-menu',template:/*ion-inline-start:"/Users/fkhan/Desktop/MyFavoriteDua/src/components/side-menu/side-menu.html"*/'\n\n\n<ion-menu [content]="content" side="left" id="site_menu" >\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n  <ion-content>\n    <ion-list >\n          <button menuClose ion-item  (click)="openPage(\'mainMenu\')">\n              <div style="font-weight: bold;font-size:14px">\n                  Main Page\n              </div>\n            </button>\n            <button menuClose ion-item  (click)="openPage(\'favorite\')">\n                <div style="font-weight: bold;font-size:14px">\n                    Favorite\n                </div>\n              </button>\n            <button menuClose ion-item  (click)="openPage(\'setting\')">\n              <div style="font-weight: bold;font-size:14px">\n                  Setting\n              </div>\n            </button>\n            \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/fkhan/Desktop/MyFavoriteDua/src/components/side-menu/side-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], SideMenuComponent);

//# sourceMappingURL=side-menu.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dua_list_dua_list__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dua_service_dua_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dua_constant_dua_constant__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

;







/**
 * Generated class for the MainMenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var MainMenuComponent = (function () {
    function MainMenuComponent(navCtrl, duaServiceProvider, storage, plt, duaConstantProvider, admobFree, socialSharing) {
        this.navCtrl = navCtrl;
        this.duaServiceProvider = duaServiceProvider;
        this.storage = storage;
        this.plt = plt;
        this.duaConstantProvider = duaConstantProvider;
        this.admobFree = admobFree;
        this.socialSharing = socialSharing;
        this.ahadeesListArray = [];
        this.translationStore = "urdu";
        this.isFavorite = false;
        this.loadDua();
    }
    MainMenuComponent.prototype.loadDua = function () {
        var _this = this;
        //check for local stor
        var options = {
            //ios
            //adId: 'ca-app-pub-6025676747290907~5163018690',
            //android
            adId: 'ca-app-pub-5732334124058455/7973166445',
            adSize: 'SMART_BANNER',
            autoShow: true
        };
        this.platform = this.duaConstantProvider.device;
        this.storage.get('sizeStore').then(function (val) {
            if (val != null) {
                _this.sizeStore = val;
            }
        });
        this.storage.get('translationStore').then(function (val) {
            try {
                if (val != null) {
                    _this.translationStore = val;
                }
            }
            catch (e) {
            }
        });
        this.admobFree.banner.config(options);
        this.admobFree.banner.prepare()
            .then(function () {
            _this.admobFree.banner.show();
        })
            .catch(function (e) { return console.log(e); });
        if (this.plt.is('iphone')) {
            // This will only print when on iOS
            console.log('I am an mobile device!');
            this.duaConstantProvider.device = "small";
            this.platform = "small";
        }
        else if (this.plt.is('ipad')) {
            // This will only print when on iOS
            console.log('I am an ipad device!');
            this.duaConstantProvider.device = "large";
            this.platform = "large";
        }
        else if (this.plt.is('tablet')) {
            // This will only print when on iOS
            console.log('I am an tablet device!');
            this.duaConstantProvider.device = "large";
            this.platform = "large";
        }
        else if (this.plt.is('mobile')) {
            // This will only print when on iOS
            console.log('I am an mobile device!');
            this.duaConstantProvider.device = "small";
            this.platform = "small";
        }
        else {
            console.log('I am an browser device!');
        }
    };
    MainMenuComponent.prototype.duaNavigation = function (val) {
        if (val == 'quran') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__components_dua_list_dua_list__["a" /* DuaListComponent */], {
                type: val,
                title: 'Quran Dua'
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__components_dua_list_dua_list__["a" /* DuaListComponent */], {
                type: val,
                title: 'Ahadees Dua'
            });
        }
    };
    return MainMenuComponent;
}());
MainMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'main-menu',template:/*ion-inline-start:"/Users/fkhan/Desktop/MyFavoriteDua/src/components/main-menu/main-menu.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n      </button>\n      <ion-title>My Favorite Dua </ion-title>\n  \n      <ion-buttons end>\n  \n  \n      </ion-buttons>\n  \n    </ion-navbar>\n  \n  \n  </ion-header>\n  \n  \n  <ion-content padding style="padding: 0px; background-color:white">\n  \n     \n  \n        <ion-card style="background-color: lightgreen ; font-family: monospace" (click)="duaNavigation(\'quran\')" >\n              <ion-card-content style="font-size: x-large;">\n              Quranic Dua\n              </ion-card-content>\n        \n        </ion-card>\n  \n  \n        <ion-card style="background-color: lightgreen ; font-family: monospace" (click)="duaNavigation(\'ahadees\')" >\n               <ion-card-content style="font-size: x-large;">\n               Ahadees Dua\n              </ion-card-content>\n            \n        </ion-card>\n  \n     \n  </ion-content>\n  <!--\n  <ion-footer>\n      <ion-toolbar color="primary">\n        <p></p>\n        \n      </ion-toolbar>\n    </ion-footer>  <ion-footer>\n      <ion-toolbar color="primary">\n        <p></p>\n        \n      </ion-toolbar>\n    </ion-footer>\n  -->'/*ion-inline-end:"/Users/fkhan/Desktop/MyFavoriteDua/src/components/main-menu/main-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_dua_service_dua_service__["a" /* DuaServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_dua_constant_dua_constant__["a" /* DuaConstantProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */]])
], MainMenuComponent);

//# sourceMappingURL=main-menu.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dua_service_dua_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dua_constant_dua_constant__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(93);
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
 * Generated class for the DuaListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var options = {
    //ios
    //adId: 'ca-app-pub-6025676747290907~5163018690',
    //android
    adId: 'ca-app-pub-6025676747290907/3957478739',
    adSize: 'SMART_BANNER',
    isTesting: false,
    autoShow: true
};
var DuaListComponent = (function () {
    function DuaListComponent(navCtrl, duaServiceProvider, storage, plt, duaConstantProvider, admobFree, socialSharing, navParams) {
        this.navCtrl = navCtrl;
        this.duaServiceProvider = duaServiceProvider;
        this.storage = storage;
        this.plt = plt;
        this.duaConstantProvider = duaConstantProvider;
        this.admobFree = admobFree;
        this.socialSharing = socialSharing;
        this.navParams = navParams;
        this.ahadeesListArray = [];
        this.translationStore = "urdu";
        this.isFavorite = false;
        this.title = "";
        this.type = "";
        this.favoriteArray = [];
        this.title = this.navParams.get('title');
        this.type = this.navParams.get('type');
        this.loadDua();
    }
    DuaListComponent.prototype.loadDua = function () {
        //check for local stor
        var _this = this;
        this.platform = this.duaConstantProvider.device;
        this.storage.get('sizeStore').then(function (val) {
            if (val != null) {
                _this.sizeStore = val;
            }
        });
        this.storage.get('translationStore').then(function (val) {
            try {
                if (val != null) {
                    _this.translationStore = val;
                }
            }
            catch (e) {
            }
        });
        //this.storage.set('ahadeesDua', null);
        //this.storage.set('quranDua', null);
        /*this.duaServiceProvider.getAhadeesDuaListFirebase()
        .subscribe(data => {
           console.log('firebase data');
           console.log(data[0][0].no);
           console.log(data[0]);
    
          },
        (err) => {console.log(err);
    
    
          }
        );*/
        if (this.type == 'quran') {
            this.storage.get('quranDua').then(function (val) {
                if (val == null) {
                    _this.duaServiceProvider.getQuranDuaListFirebase()
                        .subscribe(function (data) {
                        _this.ahadeesListArray = data[0][0].no;
                        _this.storage.set('quranDua', _this.ahadeesListArray);
                        debugger;
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    _this.ahadeesListArray = val;
                    _this.duaServiceProvider.getQuranDuaListFirebase()
                        .subscribe(function (data) {
                        var list = data[0][0].no;
                        if (_this.ahadeesListArray.length < list.length || _this.ahadeesListArray.length > list.length) {
                            _this.ahadeesListArray.push(list[list.length - 1]);
                            _this.storage.set('quranDua', _this.ahadeesListArray);
                        }
                        debugger;
                    }, function (err) {
                        console.log(err);
                    });
                }
            });
        }
        else {
            this.storage.get('ahadeesDua').then(function (val) {
                if (val == null) {
                    _this.duaServiceProvider.getAhadeesDuaListFirebase()
                        .subscribe(function (data) {
                        _this.ahadeesListArray = data[0][0].no;
                        _this.storage.set('ahadeesDua', _this.ahadeesListArray);
                        debugger;
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    _this.ahadeesListArray = val;
                    _this.duaServiceProvider.getAhadeesDuaListFirebase()
                        .subscribe(function (data) {
                        var list = data[0][0].no;
                        ;
                        if (_this.ahadeesListArray.length < list.length || _this.ahadeesListArray.length > list.length) {
                            _this.ahadeesListArray.push(list[list.length - 1]);
                            _this.storage.set('ahadeesDua', _this.ahadeesListArray);
                        }
                        debugger;
                    }, function (err) {
                        console.log(err);
                    });
                }
            });
        }
    };
    DuaListComponent.prototype.unFavorite = function (index) {
        console.log(index);
        //this.isFavorite = false;
        var item = this.ahadeesListArray.filter(function (item) { return item.index == index; });
        item[0].favorite = false;
        if (this.type == "quran") {
            this.storage.set('quranDua', this.ahadeesListArray);
        }
        else {
            this.storage.set('ahadeesDua', this.ahadeesListArray);
        }
        console.log(this.ahadeesListArray);
    };
    DuaListComponent.prototype.favorite = function (index) {
        console.log(index);
        //this.isFavorite = true;
        var item = this.ahadeesListArray.filter(function (item) { return item.index == index; });
        item[0].favorite = true;
        if (this.type == "quran") {
            this.storage.set('quranDua', this.ahadeesListArray);
        }
        else {
            this.storage.set('ahadeesDua', this.ahadeesListArray);
        }
    };
    /*unFavorite(index){
      debugger;
      this.isFavorite = false;
      //this.favoriteArray.slice(this.duaIndex);
      var i = this.favoriteArray.indexOf(index);
      //this.favoriteArray = this.favoriteArray.splice(this.duaIndex, 1)
      if(i != -1) {
        this.favoriteArray.splice(i, 1);
      }
      this.storage.set('favoriteArrayStore', this.favoriteArray);
    }
  
    favorite(index){
      debugger;;
      this.favoriteArray.push(index);
      this.storage.set('favoriteArrayStore', this.favoriteArray);
      this.isFavorite = true;
     
    }*/
    DuaListComponent.prototype.shareDUA = function (index) {
        console.log(index);
        var item = this.ahadeesListArray.filter(function (item) { return item.index == index; });
        item[0].favorite = true;
        if (this.translationStore == "urdu") {
            this.socialSharing.share(item[0].arabic + "  " + item[0].urdu, "Dua " + item[0].urdu, null);
        }
        else {
            this.socialSharing.share(item[0].arabic + "  " + item[0].english, "Dua " + item[0].english, null);
        }
    };
    return DuaListComponent;
}());
DuaListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'dua-list',template:/*ion-inline-start:"/Users/fkhan/Desktop/MyFavoriteDua/src/components/dua-list/dua-list.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title>{{title}} </ion-title>\n\n    <ion-buttons end>\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding style="padding: 0px; background-color:#E1F5FE">\n\n          <div >\n\n              <ion-card  style="background-color: #B2DFDB; text-align: center;" *ngIf="ahadeesListArray.length == 0">\n                  \n                  <ion-spinner icon="spiral"></ion-spinner>\n                  \n              <ion-card-content   [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n             \n               </ion-card-content>\n                  \n                      </ion-card>\n          <ion-card *ngFor="let item of  ahadeesListArray; let i = index"  >\n      \n            <ion-card-header [ngClass]="platform==\'small\'? \'header-small-font\' : \'header-large-font\'">\n                <ion-toolbar  >\n                    <ion-buttons start  (tap)="shareDUA(item.index)">\n                        <button ion-button icon-only >\n                            <ion-icon name="share"></ion-icon>\n                          \n                        </button>\n                      </ion-buttons>  \n                    <ion-title [ngClass]="platform==\'small\'? \'toolbar-title-small-font\' : \'toolbar-title-large-font\'" >Dua {{i+1}} </ion-title>\n                    \n                    <ion-buttons end *ngIf="item.favorite" (tap)="unFavorite(item.index)" >\n                        <button ion-button icon-only >\n                           \n                            <ion-icon name="star"  (click)="favorite(item.index)"></ion-icon>\n                        </button>\n                      </ion-buttons> \n                      <ion-buttons end *ngIf="!item.favorite" (tap)="favorite(item.index)">\n                          <button ion-button icon-only >\n                              <ion-icon name="star-outline"></ion-icon>\n                            \n                          </button>\n                        </ion-buttons>  \n\n                  </ion-toolbar>\n\n \n                  \n             \n            </ion-card-header>\n      \n         <!--     <ion-card-content  style="background-color: #64B5F6;font-size: larger; font-weight: 900;">\n                  <ion-item style="background-color: #64B5F6;font-size: larger; font-weight: 900;">\n                  -->\n                  <ion-card-content   [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'" style="text-align:center">\n                     \n                    <div [style.font-size]="sizeStore" > \n                        <!--  <p style= "font-size: xx-large"> -->\n                          <br/>\n                              {{item.arabic}}\n                         \n                          <br/>\n                          <br/>\n                          \n                        <!--  <div *ngIf="translationStore==\'english\'"> \n                             {{item.english}}\n                          </div>\n                        -->\n                          <div *ngIf="translationStore==\'urdu\'"> \n                              {{item.urdu}}\n                           </div>\n                           \n                        </div>\n                  \n              \n                \n                <!-- Add card content here! -->\n                <!--<button ion-button color="secondary" round  (click)="duaList()">Light</button> -->\n              </ion-card-content>\n      \n          </ion-card>\n        </div> \n\n   \n</ion-content>\n\n<!--\n<ion-footer>\n        <ion-toolbar color="primary">\n          <p></p>\n          \n        </ion-toolbar>\n      </ion-footer>\n    -->'/*ion-inline-end:"/Users/fkhan/Desktop/MyFavoriteDua/src/components/dua-list/dua-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_dua_service_dua_service__["a" /* DuaServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_dua_constant_dua_constant__["a" /* DuaConstantProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], DuaListComponent);

//# sourceMappingURL=dua-list.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(68);
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
 * Generated class for the SettingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SettingComponent = (function () {
    function SettingComponent(storage) {
        var _this = this;
        this.storage = storage;
        this.translationSelected = "urdu";
        this.sizeSelected = "normal";
        console.log('Hello SettingComponent Component');
        this.text = 'Hello World';
        storage.get('sizeStore').then(function (val) {
            if (val != null) {
                _this.sizeSelected = val;
            }
        });
        storage.get('translationStore').then(function (val) {
            if (val != null) {
                _this.translationSelected = val;
            }
        });
    }
    SettingComponent.prototype.selectTranlationOption = function () {
        this.storage.set('translationStore', this.translationSelected);
        console.log(this.translationSelected);
    };
    SettingComponent.prototype.selectSizeOption = function () {
        this.storage.set('sizeStore', this.sizeSelected);
        console.log(this.sizeSelected);
    };
    return SettingComponent;
}());
SettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'setting',template:/*ion-inline-start:"/Users/fkhan/Desktop/MyFavoriteDua/src/components/setting/setting.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title>Setting </ion-title>\n\n    <ion-buttons end>\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding style="padding: 0px;  background-color: #B2DFDB;">\n\n  <ion-list radio-group [(ngModel)]="sizeSelected">\n      <ion-list-header>\n          Font Size\n        </ion-list-header>\n        <ion-item>\n            <ion-label>Normal</ion-label>\n            <ion-radio checked="true" value="normal" (click)="selectSizeOption()"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Large</ion-label>\n            <ion-radio value="large" (click)="selectSizeOption()"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>XX-Large</ion-label>\n            <ion-radio value="xx-large" (click)="selectSizeOption()"></ion-radio>\n          </ion-item>\n  </ion-list>\n\n  <br/>\n  <br/>\n\n <!-- <ion-list radio-group [(ngModel)]="translationSelected">\n      <ion-list-header>\n          Transaltion\n        </ion-list-header> -->\n <!-- <ion-item>\n      <ion-label>English</ion-label>\n      <ion-radio checked="true" value="english" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n  -->\n  <!--  <ion-item>\n      <ion-label>Urdu</ion-label>\n      <ion-radio value="urdu" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n  \n  \n  </ion-list>\n-->\n   \n</ion-content>'/*ion-inline-end:"/Users/fkhan/Desktop/MyFavoriteDua/src/components/setting/setting.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], SettingComponent);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dua_service_dua_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dua_constant_dua_constant__ = __webpack_require__(110);
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
 * Generated class for the FavoriteComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var FavoriteComponent = (function () {
    function FavoriteComponent(navCtrl, duaServiceProvider, storage, duaConstantProvider, socialSharing) {
        this.navCtrl = navCtrl;
        this.duaServiceProvider = duaServiceProvider;
        this.storage = storage;
        this.duaConstantProvider = duaConstantProvider;
        this.socialSharing = socialSharing;
        this.ahadeesListArray = [];
        this.ahadeesListArrayAll = [];
        this.translationStore = "urdu";
        this.isFavorite = false;
        this.loadDua();
    }
    FavoriteComponent.prototype.loadDua = function () {
        //check for local storage
        var _this = this;
        this.platform = this.duaConstantProvider.device;
        this.storage.get('sizeStore').then(function (val) {
            if (val != null) {
                _this.sizeStore = val;
            }
        });
        this.storage.get('translationStore').then(function (val) {
            try {
                if (val != null) {
                    _this.translationStore = val;
                }
            }
            catch (e) {
            }
        });
        this.storage.get('quranDua').then(function (val) {
            _this.ahadeesListArrayAll = val;
            //this.ahadeesListArray =  val.filter(item=> item.favorite == true);
            //console.log(this.ahadeesListArray);
            _this.storage.get('ahadeesDua').then(function (val) {
                try {
                    _this.ahadeesListArrayAll = _this.ahadeesListArrayAll.concat(val);
                    // this.ahadeesListArrayAll = val;
                    _this.ahadeesListArray = _this.ahadeesListArrayAll.filter(function (item) { return item.favorite == true; });
                }
                catch (e) {
                }
                console.log(_this.ahadeesListArray);
            });
        });
    };
    FavoriteComponent.prototype.unFavorite = function (index, type) {
        var _this = this;
        console.log(index);
        //this.isFavorite = false;
        //var item = this.ahadeesListArray.filter(item => item.index == index);
        if (type == "quran") {
            this.storage.get('quranDua').then(function (val) {
                var item = val.filter(function (item) { return item.index == index; });
                item[0].favorite = false;
                _this.storage.set('quranDua', val);
                console.log(_this.ahadeesListArray);
            });
            //this.storage.set('quranDua', this.ahadeesListArray);
        }
        else {
            //this.storage.set('ahadeesDua', this.ahadeesListArray);
            this.storage.get('ahadeesDua').then(function (val) {
                var item = val.filter(function (item) { return item.index == index; });
                item[0].favorite = false;
                _this.storage.set('ahadeesDua', val);
                console.log(_this.ahadeesListArray);
            });
        }
        console.log(this.ahadeesListArray);
    };
    FavoriteComponent.prototype.favorite = function (index, type) {
        var _this = this;
        if (type == "quran") {
            this.storage.get('quranDua').then(function (val) {
                var item = val.filter(function (item) { return item.index == index; });
                item[0].favorite = true;
                _this.storage.set('quranDua', val);
                console.log(_this.ahadeesListArray);
            });
            //this.storage.set('quranDua', this.ahadeesListArray);
        }
        else {
            //this.storage.set('ahadeesDua', this.ahadeesListArray);
            this.storage.get('ahadeesDua').then(function (val) {
                var item = val.filter(function (item) { return item.index == index; });
                item[0].favorite = true;
                _this.storage.set('ahadeesDua', val);
                console.log(_this.ahadeesListArray);
            });
        }
    };
    FavoriteComponent.prototype.shareDUA = function (index) {
        console.log(index);
        var item = this.ahadeesListArrayAll.filter(function (item) { return item.index == index; });
        if (this.translationStore == "urdu") {
            this.socialSharing.share(item[0].arabic + "  " + item[0].urdu, "Dua " + item[0].urdu, null);
        }
        else {
            this.socialSharing.share(item[0].arabic + "  " + item[0].english, "Dua " + item[0].english, null);
        }
    };
    return FavoriteComponent;
}());
FavoriteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'favorite',template:/*ion-inline-start:"/Users/fkhan/Desktop/MyFavoriteDua/src/components/favorite/favorite.html"*/'\n<ion-header >\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n      </button>\n      <ion-title> Favorite  </ion-title>\n  \n      <ion-buttons end>\n  \n  \n      </ion-buttons>\n  \n    </ion-navbar>\n\n  \n  </ion-header>\n  \n  \n  <ion-content padding style="padding: 0px; background-color:#E1F5FE">\n      \n                <div >\n      \n                    <ion-card  style="background-color: #B2DFDB; text-align: center;" *ngIf="ahadeesListArray.length == 0">\n                        \n                        \n                        \n                    <ion-card-content   [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n                        No Favorite\n                     </ion-card-content>\n                        \n                            </ion-card>\n                <ion-card *ngFor="let item of  ahadeesListArray; let i = index"  >\n            \n                  <ion-card-header [ngClass]="platform==\'small\'? \'header-small-font\' : \'header-large-font\'">\n                      <ion-toolbar  >\n                          <ion-buttons start  (tap)="shareDUA(item.index, item.type)">\n                              <button ion-button icon-only >\n                                  <ion-icon name="share"></ion-icon>\n                                \n                              </button>\n                            </ion-buttons>  \n                          <ion-title [ngClass]="platform==\'small\'? \'toolbar-title-small-font\' : \'toolbar-title-large-font\'" >Favorite {{i+1}} {{item.title}}  </ion-title>\n                          \n                          <ion-buttons end *ngIf="item.favorite" (tap)="unFavorite(item.index, item.type)" >\n                              <button ion-button icon-only >\n                                 \n                                  <ion-icon name="star"  ></ion-icon>\n                              </button>\n                            </ion-buttons> \n                            <ion-buttons end *ngIf="!item.favorite" (tap)="favorite(item.index, item.type)">\n                                <button ion-button icon-only >\n                                    <ion-icon name="star-outline"></ion-icon>\n                                  \n                                </button>\n                              </ion-buttons>  \n      \n                        </ion-toolbar>\n      \n       \n                        \n                   \n                  </ion-card-header>\n            \n               <!--     <ion-card-content  style="background-color: #64B5F6;font-size: larger; font-weight: 900;">\n                        <ion-item style="background-color: #64B5F6;font-size: larger; font-weight: 900;">\n                        -->\n                        <ion-card-content   [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'" style="text-align:center">\n                           \n                          <p [style.font-size]="sizeStore"> \n                              <!--  <p style= "font-size: xx-large"> -->\n                                <br/>\n                                    {{item.arabic}}\n                               \n                                    <br/>\n                                    <br/>\n                                {{item.english}}\n                                </p>\n                        \n                    \n                      \n                      <!-- Add card content here! -->\n                      <!--<button ion-button color="secondary" round  (click)="duaList()">Light</button> -->\n                    </ion-card-content>\n            \n                </ion-card>\n              </div> \n      \n         \n      </ion-content>\n      \n      \n      '/*ion-inline-end:"/Users/fkhan/Desktop/MyFavoriteDua/src/components/favorite/favorite.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_dua_service_dua_service__["a" /* DuaServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_dua_constant_dua_constant__["a" /* DuaConstantProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
], FavoriteComponent);

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(340);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_side_menu_side_menu__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dua_list_dua_list__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_main_menu_main_menu__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_setting_setting__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_favorite_favorite__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_dua_constant_dua_constant__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_dua_service_dua_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_media__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_dua_list_data_dua_list_data__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var firebaseConfig = {
    apiKey: "AIzaSyBw-H2j-MU1RqC4fO-XJgMmj3zRPo8xJiU",
    authDomain: "myfavoriteduas.firebaseapp.com",
    databaseURL: "https://myfavoriteduas.firebaseio.com",
    projectId: "myfavoriteduas",
    storageBucket: "myfavoriteduas.appspot.com",
    messagingSenderId: "932145254418"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__components_side_menu_side_menu__["a" /* SideMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_dua_list_dua_list__["a" /* DuaListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_setting_setting__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_favorite_favorite__["a" /* FavoriteComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_main_menu_main_menu__["a" /* MainMenuComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_23_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__components_side_menu_side_menu__["a" /* SideMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_dua_list_dua_list__["a" /* DuaListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_setting_setting__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_favorite_favorite__["a" /* FavoriteComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_main_menu_main_menu__["a" /* MainMenuComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_dua_constant_dua_constant__["a" /* DuaConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_dua_service_dua_service__["a" /* DuaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_dua_list_data_dua_list_data__["a" /* DuaListDataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/fkhan/Desktop/MyFavoriteDua/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/fkhan/Desktop/MyFavoriteDua/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaListDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the DuaListDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DuaListDataProvider = (function () {
    function DuaListDataProvider(http) {
        this.http = http;
        console.log('Hello DuaistDataProvider Provider');
    }
    return DuaListDataProvider;
}());
DuaListDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DuaListDataProvider);

//# sourceMappingURL=dua-list-data.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* * * ./app/comments/components/comment.service.ts * * */
// Imports




// Import RxJs required methods


var DuaServiceProvider = (function () {
    function DuaServiceProvider(http, afd) {
        this.http = http;
        this.afd = afd;
    }
    DuaServiceProvider.prototype.getAhadeesDuaList = function () {
        return this.http.get("assets/json/favoriteAhadeesDua.json")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    DuaServiceProvider.prototype.getQuranDuaList = function () {
        return this.http.get("assets/json/favoriteQuranicDua.json")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    DuaServiceProvider.prototype.getAhadeesDuaListURL = function () {
        return this.http.get("https://raw.githubusercontent.com/tafaisalkhan/duaApp/master/favoriteAhadeesDua.json")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    DuaServiceProvider.prototype.getQuranDuaListURL = function () {
        return this.http.get("https://raw.githubusercontent.com/tafaisalkhan/duaApp/master/favoriteQuranicDua.json")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    DuaServiceProvider.prototype.getQuranDuaListFirebase = function () {
        return this.afd.list('quranic');
    };
    DuaServiceProvider.prototype.getAhadeesDuaListFirebase = function () {
        return this.afd.list('ahadees');
    };
    return DuaServiceProvider;
}());
DuaServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], DuaServiceProvider);

//# sourceMappingURL=dua-service.js.map

/***/ })

},[335]);
//# sourceMappingURL=main.js.map