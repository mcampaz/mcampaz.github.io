(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _coach_area_coach_coach_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coach_area/coach/coach.component */ "./src/app/coach_area/coach/coach.component.ts");
/* harmony import */ var _coach_area_athlete_info_survey_athlete_info_survey_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coach_area/athlete-info-survey/athlete-info-survey.component */ "./src/app/coach_area/athlete-info-survey/athlete-info-survey.component.ts");
/* harmony import */ var _athlete_area_athlete_athlete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./athlete_area/athlete/athlete.component */ "./src/app/athlete_area/athlete/athlete.component.ts");
/* harmony import */ var _athlete_area_athlete_info_form_athlete_info_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./athlete_area/athlete-info-form/athlete-info-form.component */ "./src/app/athlete_area/athlete-info-form/athlete-info-form.component.ts");
/* harmony import */ var _authentication_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication.guard */ "./src/app/authentication.guard.ts");
/* harmony import */ var _athlete_area_athlete_healthform1_athlete_healthform1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./athlete_area/athlete-healthform1/athlete-healthform1.component */ "./src/app/athlete_area/athlete-healthform1/athlete-healthform1.component.ts");












var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'user_info',
        component: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"],
        children: [{
                path: './athlete_area/athlete-info-form',
                component: _athlete_area_athlete_info_form_athlete_info_form_component__WEBPACK_IMPORTED_MODULE_9__["AthleteInfoFormComponent"],
            }
        ]
    },
    {
        path: 'coach',
        component: _coach_area_coach_coach_component__WEBPACK_IMPORTED_MODULE_6__["CoachComponent"],
        children: [{
                path: 'athlete-info-survey',
                component: _coach_area_athlete_info_survey_athlete_info_survey_component__WEBPACK_IMPORTED_MODULE_7__["AthleteInfoSurveyComponent"],
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_10__["AuthenticationGuard"]]
            }]
    },
    {
        path: 'athlete',
        component: _athlete_area_athlete_athlete_component__WEBPACK_IMPORTED_MODULE_8__["AthleteComponent"],
        children: [{
                path: 'athlete-info-form',
                component: _athlete_area_athlete_info_form_athlete_info_form_component__WEBPACK_IMPORTED_MODULE_9__["AthleteInfoFormComponent"],
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_10__["AuthenticationGuard"]]
            },
            {
                path: 'athlete-healthform1',
                component: _athlete_area_athlete_healthform1_athlete_healthform1_component__WEBPACK_IMPORTED_MODULE_11__["AthleteHealthform1Component"],
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar, .navbar-brand {\r\n  -webkit-text-decoration-color: black;\r\n          text-decoration-color: black;\r\n  font-size: xx-large;\r\n  color: white;\r\n}\r\nh1.navbar-brand {\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciwgLm5hdmJhci1icmFuZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5oMS5uYXZiYXItYnJhbmQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"pos-f-t\">\n  <div class=\"collapse\" id=\"navbarToggleExternalContent\">\n    <div class=\"bg-dark p-4\">\n      <h5 class=\"text-white h4\">Collapsed content</h5>\n      <span class=\"text-muted\">Toggleable via the navbar brand.</span>\n    </div>\n  </div>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-info \">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n            data-target=\"#navbarToggleExternalContent\"\n            aria-controls=\"navbarToggleExternalContent\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <h1 class=\"navbar-brand\" href=\"#\">Health Application</h1>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"flex-sm-fill text-sm-center nav-link\" routerLink=\"/athlete\" tabindex=\"-1\" aria-disabled=\"true\">Athlete Area</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"flex-sm-fill text-sm-center nav-link\" routerLink=\"/coach\" routerLinkActive=\"inactive\" tabindex=\"-1\" aria-disabled=\"true\">Coach Area</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"flex-sm-fill text-sm-center nav-link\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"flex-sm-fill text-sm-center nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Omar Health App';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _user_information_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-information.service */ "./src/app/user-information.service.ts");
/* harmony import */ var _athlete_area_athlete_athlete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./athlete_area/athlete/athlete.component */ "./src/app/athlete_area/athlete/athlete.component.ts");
/* harmony import */ var _coach_area_coach_coach_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./coach_area/coach/coach.component */ "./src/app/coach_area/coach/coach.component.ts");
/* harmony import */ var _athlete_area_athlete_info_form_athlete_info_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./athlete_area/athlete-info-form/athlete-info-form.component */ "./src/app/athlete_area/athlete-info-form/athlete-info-form.component.ts");
/* harmony import */ var _coach_athlete_info_survey_coach_athlete_info_survey_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./coach-athlete-info-survey/coach-athlete-info-survey.component */ "./src/app/coach-athlete-info-survey/coach-athlete-info-survey.component.ts");
/* harmony import */ var _coach_area_athlete_info_survey_athlete_info_survey_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./coach_area/athlete-info-survey/athlete-info-survey.component */ "./src/app/coach_area/athlete-info-survey/athlete-info-survey.component.ts");
/* harmony import */ var _authentication_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./authentication.guard */ "./src/app/authentication.guard.ts");
/* harmony import */ var _athlete_area_athlete_healthform1_athlete_healthform1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./athlete_area/athlete-healthform1/athlete-healthform1.component */ "./src/app/athlete_area/athlete-healthform1/athlete-healthform1.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_10__["UserInfoComponent"],
                _athlete_area_athlete_athlete_component__WEBPACK_IMPORTED_MODULE_12__["AthleteComponent"],
                _coach_area_coach_coach_component__WEBPACK_IMPORTED_MODULE_13__["CoachComponent"],
                _athlete_area_athlete_info_form_athlete_info_form_component__WEBPACK_IMPORTED_MODULE_14__["AthleteInfoFormComponent"],
                _coach_athlete_info_survey_coach_athlete_info_survey_component__WEBPACK_IMPORTED_MODULE_15__["CoachAthleteInfoSurveyComponent"],
                _coach_area_athlete_info_survey_athlete_info_survey_component__WEBPACK_IMPORTED_MODULE_16__["AthleteInfoSurveyComponent"],
                _athlete_area_athlete_healthform1_athlete_healthform1_component__WEBPACK_IMPORTED_MODULE_18__["AthleteHealthform1Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"], _authentication_guard__WEBPACK_IMPORTED_MODULE_17__["AuthenticationGuard"], _user_information_service__WEBPACK_IMPORTED_MODULE_11__["UserInformationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/athlete_area/athlete-healthform1/athlete-healthform1.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/athlete_area/athlete-healthform1/athlete-healthform1.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n  font-weight: bolder;\r\n  font-size: xx-large;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXRobGV0ZV9hcmVhL2F0aGxldGUtaGVhbHRoZm9ybTEvYXRobGV0ZS1oZWFsdGhmb3JtMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2F0aGxldGVfYXJlYS9hdGhsZXRlLWhlYWx0aGZvcm0xL2F0aGxldGUtaGVhbHRoZm9ybTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/athlete_area/athlete-healthform1/athlete-healthform1.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/athlete_area/athlete-healthform1/athlete-healthform1.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron large\">\n  <div> Athlete Form1 Works!</div>\n  Land page for registered athletes, whom already have completed the info form question!\n  Form1 out of 5 forms!\n</div>\n\n<div class=\" m-5 border border-success card\">\n  <!--<p>{{athleteInfoForm.value | json}}</p>\n  <p>{{athleteInfoForm.status | json}}</p>-->\n  <div class=\"card-header\">\n    <h2 class=\"card-title\">Athlete Health Information</h2>\n  </div>\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"athleteHealthForm1\" class=\"m-3\">\n    <div class=\"form-group input-group-prepend\">\n      <label for=\"starting_date\" class=\"col-form-label-lg\"> Date  </label>\n      <input class=\"form-control col col-md-4 ml-5\" type=\"text\" formControlName=\"starting_date\"\n             placeholder=\"The date you got registered…\" id=\"starting_date\" readonly>\n    </div>\n    <div class=\"form-group\" formGroupName=\"address\">\n      <legend class=\"col-form-label-lg\">Address</legend>\n      <div class=\"form-row\">\n        <div class=\"col-7\">\n          <input type=\"text\"\n                 formControlName=\"city\" class=\"form-control form-control-lg is-valid\" placeholder=\"City\" required>\n        </div>\n        <div class=\"col\">\n          <input type=\"text\"\n                 formControlName=\"state\"  class=\"form-control form-control-lg is-valid\" placeholder=\"State\" required>\n        </div>\n        <div class=\"col\">\n          <input type=\"text\"\n                 formControlName=\"zip\"  class=\"form-control form-control-lg\" placeholder=\"Zip\" required>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"cell\" class=\"col-form-label-lg\">Cell</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('cell').invalid && athleteInfoForm.get('cell').touched\"\n               formControlName=\"cell\"  class=\"form-control form-control-lg col col-md-4 ml-5 is-valid\" id=\"cell\"\n               placeholder=\"555-555-5555\" required>\n        <div>\n          <small [class.d-none]=\"athleteInfoForm.get('cell').valid || athleteInfoForm.get('cell').untouched\" class=\"text-danger\">\n            Cell number is required\n          </small><small [class.d-none]=\"athleteInfoForm.get('cell').valid || athleteInfoForm.get('cell').untouched\" class=\"text-danger\">\n          Cell number is required\n        </small>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"age\" class=\"col-form-label-lg\">Age</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('age').invalid && athleteInfoForm.get('age').touched\"\n               formControlName=\"age\" class=\"form-control form-control-lg col col-md-2 ml-5 is-valid\" id=\"age\"\n               placeholder=\"Your age...\" required>\n      </div>\n    </div>\n    <div class=\"form-group form-check input-group-prepend col col-md-4\">\n      <legend class=\"col-form-label-lg\">Gender</legend>\n      <div class=\"form-check\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"sex1\">Female</label>\n            <input type=\"radio\" formControlName=\"sex\" aria-label=\"Gender\" id=\"sex1\" value=\"Female\" checked>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Female\" placeholder=\"Female\">\n        </div>\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"sex2\">Male</label>\n            <input type=\"radio\" formControlName=\"sex\" id=\"sex2\" value=\"Male\" aria-label=\"Gender\">\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Male\" placeholder=\"Male\">\n        </div>\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"sex3\">Transgender</label>\n            <input type=\"radio\" formControlName=\"sex\" id=\"sex3\" value=\"Transgender\" aria-label=\"Gender\">\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Transgender\" placeholder=\"Transgender\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group form-check input-group-prepend col col-md-8\">\n      <legend class=\"col-form-label-lg\">What type of doctor do you visit?</legend>\n      <div class=\"form-check\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"doctor_type1\">Naturopath</label>\n            <input type=\"radio\"  formControlName=\"doctor_type\" aria-label=\"Doctor Type: Naturopath\" id=\"doctor_type1\" value=\"Naturopath\" checked>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Female\" placeholder=\"Naturopath\">\n        </div>\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"doctor_type2\">Allopath</label>\n            <input type=\"radio\"  formControlName=\"doctor_type\" id=\"doctor_type2\" value=\"Allopath\" aria-label=\"Doctor Type: Allopath\">\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Male\" placeholder=\"Allopath\">\n        </div>\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"doctor_type3\">Both</label>\n            <input type=\"radio\"  formControlName=\"doctor_type\" id=\"doctor_type3\" value=\"Both\" aria-label=\"Doctor Type: both\">\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Both Medicines\" placeholder=\"Both\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group form-check input-group-prepend \">\n      <legend class=\"col-form-label-lg\">Has your doctor ever said that you have a heart condition\n        and that you should only do physical activity recommended by a doctor?</legend>\n      <div class=\"form-check col col-md-2\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"doctor_consent1\">Yes</label>\n            <input type=\"radio\"  formControlName=\"is_doctor_approved\" aria-label=\"Has doctor consent?\" id=\"doctor_consent1\" value=\"true\" checked>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Yes, doctor consent\" placeholder=\"Yes...\">\n        </div>\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"doctor_consent2\">No</label>\n            <input type=\"radio\"  formControlName=\"is_doctor_approved\" id=\"doctor_consent2\" value=\"false\" aria-label=\"No, doctor consent\">\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Male\" placeholder=\"No...\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group col col-md-12\">\n      <div class=\"input-group-prepend \">\n        <label for=\"frequent_foods\" class=\"col-form-label-lg\">List the kind of foods you eat the most</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('frequent_foods').invalid && athleteInfoForm.get('frequent_foods').touched\"\n               formControlName=\"frequent_foods\" class=\"form-control form-control-lg col col-md-6 ml-5 is-valid\"\n               id=\"frequent_foods\" placeholder=\"Your most frequent food...\" required>\n      </div>\n    </div>\n    <div class=\"form-group col col-md-12\">\n      <div class=\"input-group-prepend\">\n        <label for=\"craving_foods\" class=\"col-form-label-lg\">List the Kind of food you CRAVE the most</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('craving_foods').invalid && athleteInfoForm.get('craving_foods').touched\"\n               formControlName=\"craving_foods\" class=\"form-control form-control-lg col col-md-6 ml-5 is-valid\"\n               id=\"craving_foods\" placeholder=\"Your most craving foods...\" required>\n      </div>\n    </div>\n\n    <div class=\"form-group col col-md-12\">\n      <div class=\"input-group-prepend\">\n        <label for=\"weekly_workouts\" class=\"col-form-label-lg\">How many times/wk do you feel you can exercise?</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('weekly_workouts').invalid && athleteInfoForm.get('weekly_workouts').touched\"\n               formControlName=\"weekly_workouts\"  class=\"form-control form-control-lg col col-md-3 ml-2 mr-2 is-valid\"\n               id=\"weekly_workouts\" placeholder=\"Your workout frequency...\" required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"cardio_workout\" class=\"col-form-label-lg ml-2\">Cardio</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('cardio_workout').invalid && athleteInfoForm.get('cardio_workout').touched\"\n               formControlName=\"cardio_workout\"  class=\"form-control form-control-lg col col-md-3 ml-2 is-valid\"\n               id=\"cardio_workout\" placeholder=\"Your cardio workout...\" required>\n      </div>\n    </div>\n    <div class=\"form-group \">\n      <div class=\"input-group-prepend\">\n        <label for=\"resistance_workout\" class=\"col-form-label-lg  mr-5\">Resistance</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('resistance_workout').invalid && athleteInfoForm.get('resistance_workout').touched\"\n               formControlName=\"resistance_workout\"  class=\"form-control form-control-lg col col-md-4 is-valid\"\n               id=\"resistance_workout\" placeholder=\"Your resistance workout...\" required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"workout_length\" class=\"col-form-label-lg mr-3\">How many minutes?</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('workout_length').invalid && athleteInfoForm.get('workout_length').touched\"\n               formControlName=\"workout_length\"  class=\"form-control form-control-lg col col-md-4 is-valid\"\n               id=\"workout_length\" placeholder=\"How long do you workout...\" required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"daily_routine\" class=\"col-form-label-lg col col-md-6\">Describe the activity in your daily (job) routine</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('daily_routine').invalid && athleteInfoForm.get('daily_routine').touched\"\n               formControlName=\"daily_routine\"  class=\"form-control form-control-lg col col-md-5  is-valid\"\n               id=\"daily_routine\" placeholder=\"describe your daily activity...\" required>\n      </div>\n    </div>\n    <div class=\"form-group form-check input-group-prepend col col-md-12\">\n      <legend class=\"col col-form-label-lg col-md-4\">Do you take any vitamins?</legend>\n      <div class=\"form-check\">\n        <div class=\"input-group-prepend col-md-6\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"intake_vitamins1\">Yes</label>\n            <input type=\"radio\"  formControlName=\"intake_vitamins\" aria-label=\"Yes intake of vitamins\" id=\"intake_vitamins1\" value=\"true\" checked>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Yes intake of vitamins\" placeholder=\"Yes...\">\n        </div>\n        <div class=\"input-group-prepend col-md-6\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"intake_vitamins2\">No</label>\n            <input type=\"radio\"  formControlName=\"intake_vitamins\" id=\"intake_vitamins2\" value=\"false\" aria-label=\"No intake of vitamins\">\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"No intake of vitamins\" placeholder=\"No...\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group form-check input-group-prepend col col-md-8\">\n      <legend class=\"col col-form-label-lg col-md-3\">Diet pills?</legend>\n      <div class=\"form-check\">\n        <div class=\"input-group-prepend col-md-6\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"intake_diet_pills1\">Yes</label>\n            <input type=\"radio\"  formControlName=\"intake_diet_pills\" aria-label=\"Taking diet pills\" id=\"intake_diet_pills1\" value=\"true\" checked>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Taking diet pills\" placeholder=\"Yes...\">\n        </div>\n        <div class=\"input-group-prepend col col-md-6\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"intake_diet_pills2\">No</label>\n            <input type=\"radio\"  formControlName=\"intake_diet_pills\" id=\"intake_diet_pills2\" value=\"false\" aria-label=\"Not taking diet pills\">\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Not taking diet pills\" placeholder=\"No...\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group form-check input-group-prepend\">\n      <legend class=\"col col-form-label-lg col-md-4\">Minerals?</legend>\n      <div class=\"form-check\">\n        <div class=\"input-group-prepend col-md-6\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"intake_minerals1\">Yes</label>\n            <input type=\"radio\"  formControlName=\"intake_minerals\" aria-label=\"Doctor Type\" id=\"intake_minerals1\" value=\"true\" ng-c checked>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Taking minerals\" placeholder=\"Yes...\">\n        </div>\n        <div class=\"input-group-prepend col-md-6\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"intake_minerals2\">No</label>\n            <input type=\"radio\"  formControlName=\"intake_minerals\" id=\"intake_minerals2\" value=\"false\" aria-label=\"Not taking minerals\">\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Not taking minerals\" placeholder=\"No...\" required>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group col col-md-12\">\n      <div class=\"input-group-prepend\">\n        <label for=\"supplements\" class=\"col-form-label-lg\">What Supplements?</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('supplements').invalid && athleteInfoForm.get('supplements').touched\"\n               formControlName=\"supplements\"  class=\"form-control form-control-lg col col-md-8 ml-5 is-valid\"\n               id=\"supplements\" placeholder=\"Lists your medical supplements...\" required>\n      </div>\n    </div>\n    <div class=\"row justify-content-end\">\n      <button type=\"submit\" class=\"btn btn-primary btn-lg col  col-md-3 m-5 align-self-end\">Save</button>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/athlete_area/athlete-healthform1/athlete-healthform1.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/athlete_area/athlete-healthform1/athlete-healthform1.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AthleteHealthform1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AthleteHealthform1Component", function() { return AthleteHealthform1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AthleteHealthform1Component = /** @class */ (function () {
    function AthleteHealthform1Component() {
    }
    AthleteHealthform1Component.prototype.ngOnInit = function () {
    };
    AthleteHealthform1Component.prototype.onSubmit = function () {
    };
    AthleteHealthform1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-athlete-healthform1',
            template: __webpack_require__(/*! ./athlete-healthform1.component.html */ "./src/app/athlete_area/athlete-healthform1/athlete-healthform1.component.html"),
            styles: [__webpack_require__(/*! ./athlete-healthform1.component.css */ "./src/app/athlete_area/athlete-healthform1/athlete-healthform1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AthleteHealthform1Component);
    return AthleteHealthform1Component;
}());



/***/ }),

/***/ "./src/app/athlete_area/athlete-info-form/athlete-info-form.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/athlete_area/athlete-info-form/athlete-info-form.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n  font-weight: bolder;\r\n  font-size: xx-large;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXRobGV0ZV9hcmVhL2F0aGxldGUtaW5mby1mb3JtL2F0aGxldGUtaW5mby1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXRobGV0ZV9hcmVhL2F0aGxldGUtaW5mby1mb3JtL2F0aGxldGUtaW5mby1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/athlete_area/athlete-info-form/athlete-info-form.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/athlete_area/athlete-info-form/athlete-info-form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron \">\n  Athlete-info-form: To display after the athlete gets registered!!\n  <!--<div class=\"date\" [(ngModel)]=\"user\">{{user|json}}</div>-->\n  <p>\n    {{user.first_name}}, Please fill out your information to select\n    your health plan and workout!\n  </p>\n</div>\n\n<div class=\" m-5 border border-success card\">\n  <!--<p>{{athleteInfoForm.value | json}}</p>\n  <p>{{athleteInfoForm.status | json}}</p>-->\n  <div class=\"card-header\">\n    <h2 class=\"card-title\">Athlete Personal Information</h2>\n  </div>\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"athleteInfoForm\" class=\"m-3\">\n    <div class=\"form-group input-group-prepend\">\n      <label for=\"starting_date\" class=\"col-form-label-lg\"> Date  </label>\n      <input class=\"form-control col col-md-4 ml-5\" type=\"text\" formControlName=\"starting_date\"\n             placeholder=\"The date you got registered…\" id=\"starting_date\" readonly>\n    </div>\n    <div class=\"form-group\" formGroupName=\"address\">\n      <legend class=\"col-form-label-lg\">Address</legend>\n      <div class=\"form-row\">\n        <div class=\"col-7\">\n          <input type=\"text\"\n                 formControlName=\"city\" class=\"form-control form-control-lg is-valid\" placeholder=\"City\" required>\n        </div>\n        <div class=\"col\">\n          <input type=\"text\"\n                formControlName=\"state\"  class=\"form-control form-control-lg is-valid\" placeholder=\"State\" required>\n        </div>\n        <div class=\"col\">\n          <input type=\"text\"\n                 formControlName=\"zip\"  class=\"form-control form-control-lg\" placeholder=\"Zip\" required>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"cell\" class=\"col-form-label-lg\">Cell</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('cell').invalid && athleteInfoForm.get('cell').touched\"\n               formControlName=\"cell\"  class=\"form-control form-control-lg col col-md-4 ml-5 is-valid\" id=\"cell\"\n               placeholder=\"555-555-5555\" required>\n        <div>\n          <small [class.d-none]=\"athleteInfoForm.get('cell').valid || athleteInfoForm.get('cell').untouched\" class=\"text-danger\">\n            Cell number is required\n          </small><small [class.d-none]=\"athleteInfoForm.get('cell').valid || athleteInfoForm.get('cell').untouched\" class=\"text-danger\">\n            Cell number is required\n          </small>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"age\" class=\"col-form-label-lg\">Age</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('age').invalid && athleteInfoForm.get('age').touched\"\n               formControlName=\"age\" class=\"form-control form-control-lg col col-md-2 ml-5 is-valid\" id=\"age\"\n               placeholder=\"Your age...\" required>\n      </div>\n    </div>\n    <div class=\"form-group form-check input-group-prepend col col-md-4\">\n        <legend class=\"col-form-label-lg\">Gender</legend>\n        <div class=\"form-check\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <label class=\"sr-only\" for=\"sex1\">Female</label>\n              <input type=\"radio\" formControlName=\"sex\" aria-label=\"Gender\" id=\"sex1\" value=\"Female\" checked>\n            </div>\n            <input type=\"text\" class=\"form-control\" aria-label=\"Female\" placeholder=\"Female\">\n          </div>\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <label class=\"sr-only\" for=\"sex2\">Male</label>\n              <input type=\"radio\" formControlName=\"sex\" id=\"sex2\" value=\"Male\" aria-label=\"Gender\">\n            </div>\n            <input type=\"text\" class=\"form-control\" aria-label=\"Male\" placeholder=\"Male\">\n          </div>\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <label class=\"sr-only\" for=\"sex3\">Transgender</label>\n              <input type=\"radio\" formControlName=\"sex\" id=\"sex3\" value=\"Transgender\" aria-label=\"Gender\">\n            </div>\n            <input type=\"text\" class=\"form-control\" aria-label=\"Transgender\" placeholder=\"Transgender\">\n          </div>\n        </div>\n    </div>\n    <div class=\"form-group form-check input-group-prepend col col-md-8\">\n      <legend class=\"col-form-label-lg\">What type of doctor do you visit?</legend>\n      <div class=\"form-check\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"doctor_type1\">Naturopath</label>\n            <input type=\"radio\"  formControlName=\"doctor_type\" aria-label=\"Doctor Type: Naturopath\" id=\"doctor_type1\" value=\"Naturopath\" checked>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Female\" placeholder=\"Naturopath\">\n        </div>\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"doctor_type2\">Allopath</label>\n            <input type=\"radio\"  formControlName=\"doctor_type\" id=\"doctor_type2\" value=\"Allopath\" aria-label=\"Doctor Type: Allopath\">\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Male\" placeholder=\"Allopath\">\n        </div>\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"doctor_type3\">Both</label>\n            <input type=\"radio\"  formControlName=\"doctor_type\" id=\"doctor_type3\" value=\"Both\" aria-label=\"Doctor Type: both\">\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Both Medicines\" placeholder=\"Both\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group form-check input-group-prepend \">\n      <legend class=\"col-form-label-lg\">Has your doctor ever said that you have a heart condition\n        and that you should only do physical activity recommended by a doctor?</legend>\n      <div class=\"form-check col col-md-2\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"doctor_consent1\">Yes</label>\n            <input type=\"radio\"  formControlName=\"is_doctor_approved\" aria-label=\"Has doctor consent?\" id=\"doctor_consent1\" value=\"true\" checked>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Yes, doctor consent\" placeholder=\"Yes...\">\n        </div>\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"doctor_consent2\">No</label>\n            <input type=\"radio\"  formControlName=\"is_doctor_approved\" id=\"doctor_consent2\" value=\"false\" aria-label=\"No, doctor consent\">\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Male\" placeholder=\"No...\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group col col-md-12\">\n      <div class=\"input-group-prepend \">\n        <label for=\"frequent_foods\" class=\"col-form-label-lg\">List the kind of foods you eat the most</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('frequent_foods').invalid && athleteInfoForm.get('frequent_foods').touched\"\n               formControlName=\"frequent_foods\" class=\"form-control form-control-lg col col-md-6 ml-5 is-valid\"\n               id=\"frequent_foods\" placeholder=\"Your most frequent food...\" required>\n      </div>\n    </div>\n    <div class=\"form-group col col-md-12\">\n      <div class=\"input-group-prepend\">\n        <label for=\"craving_foods\" class=\"col-form-label-lg\">List the Kind of food you CRAVE the most</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('craving_foods').invalid && athleteInfoForm.get('craving_foods').touched\"\n               formControlName=\"craving_foods\" class=\"form-control form-control-lg col col-md-6 ml-5 is-valid\"\n               id=\"craving_foods\" placeholder=\"Your most craving foods...\" required>\n      </div>\n    </div>\n    <div class=\"form-group col col-md-12\">\n      <div class=\"input-group-prepend\">\n        <label for=\"current_medications\" class=\"col-form-label-lg\">Please list any medication that you are currently taking</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('current_medications').invalid && athleteInfoForm.get('current_medications').touched\"\n               formControlName=\"current_medications\"  class=\"form-control form-control-lg col col-md-4 ml-2 is-valid\"\n               id=\"current_medications\" placeholder=\"List your current medicines...\" required>\n      </div>\n    </div>\n    <div class=\"form-group col col-md-12\">\n      <div class=\"input-group-prepend\">\n        <label for=\"culture\" class=\"col-form-label-lg\">Cultural Background</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('culture').invalid && athleteInfoForm.get('culture').touched\"\n               formControlName=\"culture\" class=\"form-control form-control-lg col col-md-6 ml-5 is-valid\"\n               id=\"culture\" placeholder=\"Your culture...\" required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"height\" class=\"col-form-label-lg\">Height</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('height').invalid && athleteInfoForm.get('height').touched\"\n               formControlName=\"height\"  class=\"form-control form-control-lg col col-md-3 ml-2 is-valid\"\n               id=\"height\" placeholder=\"Your height...\" required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"current_weight\" class=\"col-form-label-lg\">Current Weight</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('current_weight').invalid && athleteInfoForm.get('current_weight').touched\"\n               formControlName=\"current_weight\"  class=\"form-control form-control-lg col col-md-3 ml-2 is-valid\"\n               id=\"current_weight\" placeholder=\"Your weight...\" required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"stop_loosing_weight\" class=\"col-form-label-lg\">Time when stopped losing weight</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('stop_loosing_weight').invalid && athleteInfoForm.get('stop_loosing_weight').touched\"\n               formControlName=\"stop_loosing_weight\"  class=\"form-control form-control-lg col col-md-5 ml-2 is-valid\"\n               id=\"stop_loosing_weight\" placeholder=\"Stop losing weight...\" required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"desired_weight\" class=\"col-form-label-lg\">Desirable Weight</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('desired_weight').invalid && athleteInfoForm.get('desired_weight').touched\"\n               formControlName=\"desired_weight\"  class=\"form-control form-control-lg col col-md-3 ml-2 is-valid\"\n               id=\"desired_weight\" placeholder=\"desired weight...\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"abdomen\" class=\"col-form-label-lg\">Abdomen</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('abdomen').invalid && athleteInfoForm.get('abdomen').touched\"\n               formControlName=\"abdomen\"  class=\"form-control form-control-lg col col-md-3 ml-2 is-valid\"\n               id=\"abdomen\" placeholder=\"Your abdomen...\" required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"hip\" class=\"col-form-label-lg\">Hip</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('hip').invalid && athleteInfoForm.get('hip').touched\"\n               formControlName=\"hip\"  class=\"form-control form-control-lg col col-md-3 ml-2 is-valid\"\n               id=\"hip\" placeholder=\"Your hip...\" required>\n      </div>\n    </div>\n    <div class=\"form-group col col-md-12\">\n      <div class=\"input-group-prepend\">\n        <label for=\"primary_goal\" class=\"col-form-label-lg\">PRIMARY GOAL</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('primary_goal').invalid && athleteInfoForm.get('primary_goal').touched\"\n               formControlName=\"primary_goal\"  class=\"form-control form-control-lg col col-md-4 ml-2 is-valid\"\n               id=\"primary_goal\" placeholder=\"Your PRIMARY GOAL...\" required>\n      </div>\n    </div>\n    <div class=\"form-group col col-md-12\">\n      <div class=\"input-group-prepend\">\n        <label for=\"secondary_goal\" class=\"col-form-label-lg\">Secondary Goal</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('secondary_goal').invalid && athleteInfoForm.get('secondary_goal').touched\"\n               formControlName=\"secondary_goal\"  class=\"form-control form-control-lg col col-md-4 ml-2 is-valid\"\n               id=\"secondary_goal\" placeholder=\"Your secondary goal...\" required>\n      </div>\n    </div>\n    <div class=\"form-group col col-md-12\">\n      <div class=\"input-group-prepend\">\n        <label for=\"weekly_workouts\" class=\"col-form-label-lg\">How many times/wk do you feel you can exercise?</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('weekly_workouts').invalid && athleteInfoForm.get('weekly_workouts').touched\"\n               formControlName=\"weekly_workouts\"  class=\"form-control form-control-lg col col-md-3 ml-2 mr-2 is-valid\"\n               id=\"weekly_workouts\" placeholder=\"Your workout frequency...\" required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"cardio_workout\" class=\"col-form-label-lg ml-2\">Cardio</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('cardio_workout').invalid && athleteInfoForm.get('cardio_workout').touched\"\n               formControlName=\"cardio_workout\"  class=\"form-control form-control-lg col col-md-3 ml-2 is-valid\"\n               id=\"cardio_workout\" placeholder=\"Your cardio workout...\" required>\n      </div>\n    </div>\n    <div class=\"form-group \">\n      <div class=\"input-group-prepend\">\n        <label for=\"resistance_workout\" class=\"col-form-label-lg  mr-5\">Resistance</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('resistance_workout').invalid && athleteInfoForm.get('resistance_workout').touched\"\n               formControlName=\"resistance_workout\"  class=\"form-control form-control-lg col col-md-4 is-valid\"\n               id=\"resistance_workout\" placeholder=\"Your resistance workout...\" required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"workout_length\" class=\"col-form-label-lg mr-3\">How many minutes?</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('workout_length').invalid && athleteInfoForm.get('workout_length').touched\"\n               formControlName=\"workout_length\"  class=\"form-control form-control-lg col col-md-4 is-valid\"\n               id=\"workout_length\" placeholder=\"How long do you workout...\" required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group-prepend\">\n        <label for=\"daily_routine\" class=\"col-form-label-lg col col-md-6\">Describe the activity in your daily (job) routine</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('daily_routine').invalid && athleteInfoForm.get('daily_routine').touched\"\n               formControlName=\"daily_routine\"  class=\"form-control form-control-lg col col-md-5  is-valid\"\n               id=\"daily_routine\" placeholder=\"describe your daily activity...\" required>\n      </div>\n    </div>\n    <div class=\"form-group form-check input-group-prepend col col-md-12\">\n      <legend class=\"col col-form-label-lg col-md-4\">Do you take any vitamins?</legend>\n      <div class=\"form-check\">\n        <div class=\"input-group-prepend col-md-6\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"intake_vitamins1\">Yes</label>\n            <input type=\"radio\"  formControlName=\"intake_vitamins\" aria-label=\"Yes intake of vitamins\" id=\"intake_vitamins1\" value=\"true\" checked>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Yes intake of vitamins\" placeholder=\"Yes...\">\n        </div>\n        <div class=\"input-group-prepend col-md-6\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"intake_vitamins2\">No</label>\n            <input type=\"radio\"  formControlName=\"intake_vitamins\" id=\"intake_vitamins2\" value=\"false\" aria-label=\"No intake of vitamins\">\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"No intake of vitamins\" placeholder=\"No...\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group form-check input-group-prepend col col-md-8\">\n      <legend class=\"col col-form-label-lg col-md-3\">Diet pills?</legend>\n      <div class=\"form-check\">\n        <div class=\"input-group-prepend col-md-6\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"intake_diet_pills1\">Yes</label>\n            <input type=\"radio\"  formControlName=\"intake_diet_pills\" aria-label=\"Taking diet pills\" id=\"intake_diet_pills1\" value=\"true\" checked>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Taking diet pills\" placeholder=\"Yes...\">\n        </div>\n        <div class=\"input-group-prepend col col-md-6\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"intake_diet_pills2\">No</label>\n            <input type=\"radio\"  formControlName=\"intake_diet_pills\" id=\"intake_diet_pills2\" value=\"false\" aria-label=\"Not taking diet pills\">\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Not taking diet pills\" placeholder=\"No...\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group form-check input-group-prepend\">\n      <legend class=\"col col-form-label-lg col-md-4\">Minerals?</legend>\n      <div class=\"form-check\">\n        <div class=\"input-group-prepend col-md-6\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"intake_minerals1\">Yes</label>\n            <input type=\"radio\"  formControlName=\"intake_minerals\" aria-label=\"Doctor Type\" id=\"intake_minerals1\" value=\"true\" ng-c checked>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Taking minerals\" placeholder=\"Yes...\">\n        </div>\n        <div class=\"input-group-prepend col-md-6\">\n          <div class=\"input-group-text\">\n            <label class=\"sr-only\" for=\"intake_minerals2\">No</label>\n            <input type=\"radio\"  formControlName=\"intake_minerals\" id=\"intake_minerals2\" value=\"false\" aria-label=\"Not taking minerals\">\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Not taking minerals\" placeholder=\"No...\" required>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group col col-md-12\">\n      <div class=\"input-group-prepend\">\n        <label for=\"supplements\" class=\"col-form-label-lg\">What Supplements?</label>\n        <input type=\"text\" [class.is-invalid]=\"athleteInfoForm.get('supplements').invalid && athleteInfoForm.get('supplements').touched\"\n               formControlName=\"supplements\"  class=\"form-control form-control-lg col col-md-8 ml-5 is-valid\"\n               id=\"supplements\" placeholder=\"Lists your medical supplements...\" required>\n      </div>\n    </div>\n    <div class=\"row justify-content-end\">\n      <button type=\"submit\" class=\"btn btn-primary btn-lg col  col-md-3 m-5 align-self-end\">Save</button>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/athlete_area/athlete-info-form/athlete-info-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/athlete_area/athlete-info-form/athlete-info-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AthleteInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AthleteInfoFormComponent", function() { return AthleteInfoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AthleteInfoFormComponent = /** @class */ (function () {
    function AthleteInfoFormComponent(fBuilder, _userInfoService, _router) {
        this.fBuilder = fBuilder;
        this._userInfoService = _userInfoService;
        this._router = _router;
        this.athleteInfoForm = this.fBuilder.group({
            starting_date: [''],
            address: this.fBuilder.group({
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            cell: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sex: ['Female'],
            doctor_type: ['Both'],
            is_doctor_approved: ['true'],
            frequent_foods: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            craving_foods: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            current_medications: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            culture: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            current_weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            stop_loosing_weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            desired_weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            abdomen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            hip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            primary_goal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            secondary_goal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            weekly_workouts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cardio_workout: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            resistance_workout: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            workout_length: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            daily_routine: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            intake_vitamins: ['true'],
            intake_diet_pills: ['true'],
            intake_minerals: ['true'],
            supplements: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.user = {
            id: '',
            user_name: '',
            first_name: '',
            starting_date: '',
            info: {
                starting_date: '',
                address: {
                    city: '',
                    state: '',
                    zip: ''
                },
                cell: '',
                age: '',
                sex: '',
                doctor_type: '',
                is_doctor_approved: true,
                frequent_foods: '',
                craving_foods: '',
                current_medications: '',
                culture: '',
                height: '',
                current_weight: '',
                stop_loosing_weight: '',
                desired_weight: '',
                abdomen: '',
                hip: '',
                primary_goal: '',
                secondary_goal: '',
                weekly_workouts: '',
                cardio_workout: '',
                resistance_workout: '',
                workout_length: '',
                daily_routine: '',
                intake_vitamins: true,
                intake_diet_pills: true,
                intake_minerals: true,
                supplements: ''
            }
        };
    }
    AthleteInfoFormComponent.prototype.ngOnInit = function () {
        this.user['id'] = sessionStorage.getItem('registeredUser');
        this.user['starting_date'] = sessionStorage.getItem('date');
        this.user['user_name'] = sessionStorage.getItem('user_name');
        this.user['first_name'] = sessionStorage.getItem('first_name');
        this.updateDefaults();
    };
    AthleteInfoFormComponent.prototype.updateDefaults = function () {
        var current_date = (this.user['starting_date']).toLocaleString();
        this.athleteInfoForm.patchValue({
            starting_date: current_date
        });
    };
    AthleteInfoFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.athleteInfoForm.value);
        this.user['info'] = this.athleteInfoForm.value;
        console.log(this.user);
        this._userInfoService.updateUserInfo(this.user)
            .subscribe(function (response) {
            console.log('Success!', response);
            _this._router.navigate(['/athlete/athlete-healthform1']);
        }, function (error) { return console.error('Error!', error); });
    };
    AthleteInfoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-athlete-info-form',
            template: __webpack_require__(/*! ./athlete-info-form.component.html */ "./src/app/athlete_area/athlete-info-form/athlete-info-form.component.html"),
            styles: [__webpack_require__(/*! ./athlete-info-form.component.css */ "./src/app/athlete_area/athlete-info-form/athlete-info-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AthleteInfoFormComponent);
    return AthleteInfoFormComponent;
}());



/***/ }),

/***/ "./src/app/athlete_area/athlete/athlete.component.css":
/*!************************************************************!*\
  !*** ./src/app/athlete_area/athlete/athlete.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n  font-weight: bolder;\r\n  font-size: xx-large;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXRobGV0ZV9hcmVhL2F0aGxldGUvYXRobGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2F0aGxldGVfYXJlYS9hdGhsZXRlL2F0aGxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/athlete_area/athlete/athlete.component.html":
/*!*************************************************************!*\
  !*** ./src/app/athlete_area/athlete/athlete.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron large\">\n  <div> Athlete works!</div>\n  Land page for registered athletes, whom already have completed the health survey!\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/athlete_area/athlete/athlete.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/athlete_area/athlete/athlete.component.ts ***!
  \***********************************************************/
/*! exports provided: AthleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AthleteComponent", function() { return AthleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AthleteComponent = /** @class */ (function () {
    function AthleteComponent() {
    }
    AthleteComponent.prototype.ngOnInit = function () {
    };
    AthleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-athlete',
            template: __webpack_require__(/*! ./athlete.component.html */ "./src/app/athlete_area/athlete/athlete.component.html"),
            styles: [__webpack_require__(/*! ./athlete.component.css */ "./src/app/athlete_area/athlete/athlete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AthleteComponent);
    return AthleteComponent;
}());



/***/ }),

/***/ "./src/app/authentication.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/authentication.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");




var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }
    AuthenticationGuard.prototype.canActivate = function () {
        if (this._authenticationService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        // url routing to the data backend server
        this._registerUrl = "http://localhost:3000/api/register";
        this._loginUrl = "http://localhost:3000/api/login";
        this._userUrl = "http://localhost:3000/api/user_info";
    }
    // register user and save into data server
    AuthenticationService.prototype.registerUser = function (user) {
        return this.http.post(this._registerUrl, user);
    };
    // login user and authenticate credentials in the server
    AuthenticationService.prototype.loginUser = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    // login guard authentication
    AuthenticationService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthenticationService.prototype.updateUserInfo = function (user) {
        return this.http.put(this._userUrl, user);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/coach-athlete-info-survey/coach-athlete-info-survey.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/coach-athlete-info-survey/coach-athlete-info-survey.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvYWNoLWF0aGxldGUtaW5mby1zdXJ2ZXkvY29hY2gtYXRobGV0ZS1pbmZvLXN1cnZleS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/coach-athlete-info-survey/coach-athlete-info-survey.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/coach-athlete-info-survey/coach-athlete-info-survey.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  coach-athlete-info-questionary works!\n</p>\n"

/***/ }),

/***/ "./src/app/coach-athlete-info-survey/coach-athlete-info-survey.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/coach-athlete-info-survey/coach-athlete-info-survey.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CoachAthleteInfoSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachAthleteInfoSurveyComponent", function() { return CoachAthleteInfoSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoachAthleteInfoSurveyComponent = /** @class */ (function () {
    function CoachAthleteInfoSurveyComponent() {
    }
    CoachAthleteInfoSurveyComponent.prototype.ngOnInit = function () {
    };
    CoachAthleteInfoSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coach-athlete-info-survey',
            template: __webpack_require__(/*! ./coach-athlete-info-survey.component.html */ "./src/app/coach-athlete-info-survey/coach-athlete-info-survey.component.html"),
            styles: [__webpack_require__(/*! ./coach-athlete-info-survey.component.css */ "./src/app/coach-athlete-info-survey/coach-athlete-info-survey.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoachAthleteInfoSurveyComponent);
    return CoachAthleteInfoSurveyComponent;
}());



/***/ }),

/***/ "./src/app/coach_area/athlete-info-survey/athlete-info-survey.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/coach_area/athlete-info-survey/athlete-info-survey.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvYWNoX2FyZWEvYXRobGV0ZS1pbmZvLXN1cnZleS9hdGhsZXRlLWluZm8tc3VydmV5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/coach_area/athlete-info-survey/athlete-info-survey.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/coach_area/athlete-info-survey/athlete-info-survey.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<p>\n  athlete-info-survey belongs to Coach Area to control the User info form:\n</p>\n\n</div>\n<div class=\"row pt-5\">\n  <div class=\"col-md-12 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\"> Athlete Info Form</h3>\n      </div>\n      <div class=\"card-body\" >\n        <form class=\"form\" [formGroup]=\"updateUserInfoForm\">\n          <div class=\"form-group\" *ngFor=\"let item of formInfo; index as i\">\n             <label for={{item[0]}}>{{item[0]}}</label>\n             <input [(ngModel)]=\"item[1]\" class=\"form-control rounded-0\"\n                    mame=\"\" id=\"{{item[0]}}\" required\n                    type=\"text\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <button (click)=\"updateInfoForm()\" type=\"button\"\n                  class=\"btn btn-primary float-right\">\n            Update Form\n          </button>\n        </form>\n\n        <p>{{formInfo|json}}</p>\n        <!--<p>{{formInfo|json}}</p>-->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/coach_area/athlete-info-survey/athlete-info-survey.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/coach_area/athlete-info-survey/athlete-info-survey.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AthleteInfoSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AthleteInfoSurveyComponent", function() { return AthleteInfoSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_information_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user-information.service */ "./src/app/user-information.service.ts");




var AthleteInfoSurveyComponent = /** @class */ (function () {
    /*updateUserInfoForm: FormGroup;
    get alternateControls() {
      return this.updateUserInfoForm.get('inputControls') as FormArray;
    }*/
    function AthleteInfoSurveyComponent(fb, _userInformationService) {
        this.fb = fb;
        this._userInformationService = _userInformationService;
        this.userInfoSurvey = {};
        this.formInfo = [];
        this.result = {};
        this.labels_code = [
            "starting_date_lbl",
            "address_lbl",
            "city",
            "state",
            "zip",
            "cell_lbl",
            "age_lbl",
            "sex_lbl",
            "doctor_type_lbl",
            "is_doctor_approved_lbl",
            "frequent_foods_lbl",
            "craving_foods_lbl",
            "current_medications_lbl",
            "culture_lbl",
            "height_lbl",
            "current_weight_lbl",
            "stop_loosing_weight_lbl",
            "desired_weight_lbl",
            "abdomen_lbl",
            "hip_lbl",
            "primary_goal_lbl",
            "secondary_goal_lbl",
            "weekly__of_workouts_lbl",
            "cardio_workout_lbl",
            "resistance_workout_lbl",
            "workout_length_lbl",
            "daily_routine_lbl",
            "intake_vitamins_lbl",
            "intake_diet_pills_lbl",
            "intake_minerals_lbl",
            "supplements_lbl",
        ];
        this.labels = [
            "Date",
            "Address",
            "Street",
            "City",
            "State",
            "Zip",
            "Cell",
            "Age",
            "Sex",
            "What type of doctor do you visit?",
            "Has your doctor ever said that you have a heart condition and that you should only do physical activity recommended by a doctor?",
            "List the kind of foods you eat the most",
            "List the Kind of food you CRAVE the most",
            "Please list any medication that you are currently taking",
            "Cultural Background",
            "Height",
            "Current Weight",
            "Time when stopped losing weight",
            "Desirable Weight",
            "Abdomen",
            "Hip",
            "PRIMARY GOAL",
            "Secondary Goal",
            "How many times/wk do you feel you can exercise?",
            "Cardio",
            "Resistance",
            "How many minutes?",
            "Describe the activity in your daily (job) routine",
            "Do you take any vitamins?",
            "Diet pills?",
            "Minerals?",
            "What Supplements?"
        ];
        this.updateUserInfoForm = this.fb.group({});
    }
    AthleteInfoSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userInfoSurvey = this._userInformationService.addInfoUser(this.userInfoSurvey)
            .subscribe(function (response) {
            console.log('Success!', response);
            Object.entries(response).forEach(function (entry) {
                var key = entry[0];
                var value = entry[1];
                _this.formInfo.push([key, value]);
            });
            _this.result = response;
        }, function (error) { return console.error('Error!', error); });
        /*for (let mycontrol of this.formInfo){
          this.updateUserInfoForm.addControl(mycontrol[0], FormControl);
        }*/
    };
    AthleteInfoSurveyComponent.prototype.updateInfoForm = function () {
        console.log(JSON.stringify(this.formInfo));
        var val = {};
        // val.push(this.formInfo[0]);
        //this.formInfo.forEach(item =>{ val.JSON.stringify(item[0], item[1])});
        console.log(this.formInfo);
        /* this.userInfoSurvey = this._userInformationService.updateInfoForm(JSON.stringify(this.formInfo))
           .subscribe(
             response => {
               console.log('Success!', response);
               Object.entries(response).forEach(entry => {
                 let key = entry[0];
                 let value = entry[1];
                 this.formInfo.push([key, value]);
               });
             },
             error => console.error('Error!', error)
           );*/
    };
    AthleteInfoSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-athlete-info-survey',
            template: __webpack_require__(/*! ./athlete-info-survey.component.html */ "./src/app/coach_area/athlete-info-survey/athlete-info-survey.component.html"),
            styles: [__webpack_require__(/*! ./athlete-info-survey.component.css */ "./src/app/coach_area/athlete-info-survey/athlete-info-survey.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _user_information_service__WEBPACK_IMPORTED_MODULE_3__["UserInformationService"]])
    ], AthleteInfoSurveyComponent);
    return AthleteInfoSurveyComponent;
}());



/***/ }),

/***/ "./src/app/coach_area/coach/coach.component.css":
/*!******************************************************!*\
  !*** ./src/app/coach_area/coach/coach.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n  font-weight: bolder;\r\n  font-size: xx-large;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29hY2hfYXJlYS9jb2FjaC9jb2FjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvYWNoX2FyZWEvY29hY2gvY29hY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/coach_area/coach/coach.component.html":
/*!*******************************************************!*\
  !*** ./src/app/coach_area/coach/coach.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<p>\n  To build main coach page!\n</p>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/coach_area/coach/coach.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/coach_area/coach/coach.component.ts ***!
  \*****************************************************/
/*! exports provided: CoachComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachComponent", function() { return CoachComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoachComponent = /** @class */ (function () {
    function CoachComponent() {
    }
    CoachComponent.prototype.ngOnInit = function () {
    };
    CoachComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coach',
            template: __webpack_require__(/*! ./coach.component.html */ "./src/app/coach_area/coach/coach.component.html"),
            styles: [__webpack_require__(/*! ./coach.component.css */ "./src/app/coach_area/coach/coach.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoachComponent);
    return CoachComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Login</h3>\n      </div>\n      <div class=\"card-body\">\n        <form class=\"form\">\n          <div class=\"form-group\">\n            <label for=\"user_name\">User Name</label>\n            <input [(ngModel)]=\"loginUserData.user_name\" mame=\"user_name\"\n                   type=\"text\" class=\"form-control rounded-0\" id=\"user_name\"\n                   [ngModelOptions]=\"{standalone: true}\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input [(ngModel)]=\"loginUserData.password\" mame=\"password\" type=\"password\"\n                   class=\"form-control rounded-0\" id=\"password\"\n                   [ngModelOptions]=\"{standalone: true}\" required>\n          </div>\n          <button (click)=\"loginUser()\" type=\"button\"\n                  class=\"btn btn-primary float-right\">\n            Login\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authentication) {
        this._authentication = _authentication;
        this.loginUserData = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
        sessionStorage.clear();
    };
    LoginComponent.prototype.loginUser = function () {
        this._authentication.loginUser(this.loginUserData)
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
        }, function (err) { return console.log(err); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(first_name, last_name, email, user_name, password, role, info, health_data, health_solution) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.user_name = user_name;
        this.password = password;
        this.role = role;
        this.info = info;
        this.health_data = health_data;
        this.health_solution = health_solution;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\"> Register</h3>\n      </div>\n      <div class=\"card-body\">\n        <form class=\"form\">\n          <div class=\"form-group\">\n            <label for=\"first_name\">First Name</label>\n            <input [(ngModel)]=\"registerUserData.first_name\" class=\"form-control rounded-0\"\n                   mame=\"first_name\" id=\"first_name\" required\n                   type=\"text\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"last_name\">Last Name</label>\n            <input [(ngModel)]=\"registerUserData.last_name\" mame=\"last_name\"\n                   type=\"text\" class=\"form-control rounded-0\" id=\"last_name\"\n                   [ngModelOptions]=\"{standalone: true}\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"user_name\">User Name</label>\n            <input [(ngModel)]=\"registerUserData.user_name\" mame=\"user_name\"\n                   type=\"text\" class=\"form-control rounded-0\" id=\"user_name\"\n                   [ngModelOptions]=\"{standalone: true}\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input [(ngModel)]=\"registerUserData.email\" mame=\"email\" type=\"text\"\n                   class=\"form-control rounded-0\" id=\"email\"\n                   [ngModelOptions]=\"{standalone: true}\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input [(ngModel)]=\"registerUserData.password\" mame=\"password\" type=\"password\"\n                   class=\"form-control rounded-0\" id=\"password\"\n                   [ngModelOptions]=\"{standalone: true}\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"role\">Role</label>\n            <select [(ngModel)]=\"registerUserData.role\" mame=\"role\" [ngModelOptions]=\"{standalone: true}\"\n                    class=\"custom-select form-control rounded-0\" id=\"role\">\n              <option selected>Athlete</option>\n            </select>\n          </div>\n          <button (click)=\"registerUser()\" type=\"button\"\n                  class=\"btn btn-primary float-right\">\n            Register\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_authentication, _router) {
        this._authentication = _authentication;
        this._router = _router;
        this.registerUserData = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        localStorage.clear();
        sessionStorage.clear();
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this._authentication.registerUser(this.registerUserData)
            .subscribe(function (res) {
            console.log(res);
            console.log(res.user);
            sessionStorage.setItem('registeredUser', res.user._id);
            sessionStorage.setItem('user_name', res.user.user_name);
            sessionStorage.setItem('first_name', res.user.first_name);
            sessionStorage.setItem('date', res.user.info.starting_date);
            localStorage.setItem('token', res.token);
            _this._router.navigate(['/athlete/athlete-info-form']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user-info/user-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-info/user-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-info/user-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Athlete Basic Information</h1>\n  <form #userForm=\"ngForm\">\n    <p>{{userForm.value|json}}</p>\n    <p>{{userInfoData|json}}</p>\n    <p>{{this_address.untouched}}</p>\n    <p>{{userForm.invalid}}</p>\n    <div class=\"form-group\">\n      <label for=\"address\">Address</label>\n      <input [(ngModel)]=\"userInfoData.info.address\" mame=\"address\" type=\"text\"\n             class=\"form-control rounded-0\"  id=\"address\"\n             [ngModelOptions]=\"{standalone: true}\" #this_address=\"ngModel\" required>\n            <div class=\"text-danger\" *ngIf=\"this_address.invalid && this_address.touched\">\n              <small class=\"text-danger\">A valid address is required</small>\n            </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"cell\">Cell</label>\n      <input [(ngModel)]=\"userInfoData.info.cell\" mame=\"cell\" type=\"tel\"\n             class=\"form-control rounded-0\" id=\"cell\"\n             [ngModelOptions]=\"{standalone: true}\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"doctor_type\">What type of doctor do you visit, Naturopath  Allopath?  </label>\n      <select [(ngModel)]=\"userInfoData.info.doctor_type\" mame=\"doctor_type\"\n              [ngModelOptions]=\"{standalone: true}\" required\n              class=\"custom-select form-control rounded-0\" id=\"doctor_type\">\n        <option *ngFor=\"let doctor of doctorType\" >{{ doctor }}</option>\n      </select>\n    </div>\n\n\n\n\n    <button [disabled]=\"!userForm.form.valid\" (click)=\"addInfoUser(userForm)\" type=\"button\"\n            class=\"btn btn-primary float-right\">\n      Add Information\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/user-info/user-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-information.service */ "./src/app/user-information.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");




var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(_user_information) {
        this._user_information = _user_information;
        this.start_date = new Date();
        this.userInfoData = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]('Mario', 'Campaz', '', 'marilin', '', 'Athlete', { starting_date: this.start_date,
            address: '',
            cell: '555-555-5555', age: 60, sex: 'Male', culture: '',
            doctor_type: 'None',
            is_doctor_approved: true,
            frequent_foods: { food: ['papa', 'yucca', 'platano'] },
            craving_foods: { food: ['papaya', 'yucca frita'] },
            current_medications: { medications: ['viagra', 'pilorex'] },
            height: 6.4, current_weight: 300,
            stop_loosing_weight: '2020/12/31',
            desired_weight: 240, abdomen: 50, hip: 30,
            primary_goal: '', secondary_goal: '', weekly_number_of_workouts: 4,
            cardio_workout: 2, resistance_workout: 2, workout_length: 45,
            intake_vitamins: true, intake_diet_pills: true, intake_minerals: true,
            supplements: '', daily_routine: ''
        }, {}, {});
        this.doctorType = ['Allopath', 'Naturopath', 'None'];
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent.prototype.addInfoUser = function (userForm) {
        console.log(userForm);
        this._user_information.addInfoUser(this.userInfoData)
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/user-info/user-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_information_service__WEBPACK_IMPORTED_MODULE_2__["UserInformationService"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/user-information.service.ts":
/*!*********************************************!*\
  !*** ./src/app/user-information.service.ts ***!
  \*********************************************/
/*! exports provided: UserInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInformationService", function() { return UserInformationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserInformationService = /** @class */ (function () {
    function UserInformationService(http) {
        this.http = http;
        // url routing to the data backend server
        this._user_info_formUrl = "http://localhost:3000/api/user_info_form";
        this._loginUrl = "http://localhost:3000/api/login";
    }
    // add user information and save into data server
    UserInformationService.prototype.addInfoUser = function (user_info_survey) {
        return this.http.get(this._user_info_formUrl, user_info_survey);
    };
    UserInformationService.prototype.updateInfoForm = function (user_info_survey) {
        return this.http.post(this._user_info_formUrl, user_info_survey);
    };
    UserInformationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserInformationService);
    return UserInformationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\health_app\ngApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map