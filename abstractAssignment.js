var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.wheel = function () {
        return '4 wheeler';
    };
    Car.prototype.checkAC = function () {
        return 'AC is Available';
    };
    Car.prototype.callFacility = function () {
        return 'call facility supported';
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.price = function () {
        return 1000000;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.color = function () {
        return 'White';
    };
    Toyota.prototype.isGPS = function () {
        return 'Not supported';
    };
    return Toyota;
}(Car));
var Hyundai = /** @class */ (function (_super) {
    __extends(Hyundai, _super);
    function Hyundai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hyundai.prototype.price = function () {
        return 9000000;
    };
    Hyundai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hyundai.prototype.color = function () {
        return 'gray';
    };
    Hyundai.prototype.isGPS = function () {
        return 'Supported';
    };
    return Hyundai;
}(Car));
var objToyota = new Toyota();
console.log("Toyota car is ".concat(objToyota.wheel()));
console.log("".concat(objToyota.checkAC(), " in Toyota car"));
console.log("Toyota ".concat(objToyota.callFacility()));
console.log("Toyota car price is ".concat(objToyota.price()));
console.log("Toyota car have ".concat(objToyota.getTotalSeats(), " seats"));
console.log("Toyota car color is ".concat(objToyota.color()));
console.log("Toyota cars are ".concat(objToyota.isGPS(), " GPS "));
console.log("---------------------------------------");
var objHyundai = new Hyundai();
console.log("Hyundai car is ".concat(objHyundai.wheel()));
console.log("".concat(objHyundai.checkAC(), " in Hyundai car"));
console.log("Hyundai ".concat(objHyundai.callFacility()));
console.log("Hyundai car price is ".concat(objHyundai.price()));
console.log("Hyundai car have ".concat(objHyundai.getTotalSeats(), " seats"));
console.log("Hyundai car color is ".concat(objHyundai.color()));
console.log("Hyundai cars are ".concat(objHyundai.isGPS(), " GPS "));
