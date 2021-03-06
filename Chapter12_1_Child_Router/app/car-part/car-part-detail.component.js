"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var racing_data_service_1 = require("../racing-data.service");
var router_1 = require("@angular/router");
var CarPartDetailComponent = (function () {
    function CarPartDetailComponent(route, router, racingDataService) {
        this.route = route;
        this.router = router;
        this.racingDataService = racingDataService;
        this.carPart = {
            "id": 0,
            "name": "",
            "description": "",
            "price": 0,
            "inStock": 0,
            "image": "",
            "featured": false,
            "quantity": 0
        };
    }
    CarPartDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id'] != null) {
                _this.racingDataService.getCarParts().subscribe(function (carParts) {
                    carParts.forEach(function (data) {
                        if (data.id == params['id']) {
                            _this.carPart = data;
                        }
                    });
                });
            }
        });
    };
    return CarPartDetailComponent;
}());
CarPartDetailComponent = __decorate([
    core_1.Component({
        selector: 'car-part-detail',
        templateUrl: 'app/car-part/car-part-detail.component.html',
        styleUrls: ['app/car-part/car-part-detail.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, racing_data_service_1.RacingDataService])
], CarPartDetailComponent);
exports.CarPartDetailComponent = CarPartDetailComponent;
var _a, _b;
//# sourceMappingURL=car-part-detail.component.js.map