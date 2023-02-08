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
    return Car;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bmw.prototype.price = function () {
        return 100000;
    };
    Bmw.prototype.color = function () {
        return "Red";
    };
    return Bmw;
}(Car));
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Audi.prototype.price = function () {
        return 200000;
    };
    Audi.prototype.color = function () {
        return "Blue";
    };
    return Audi;
}(Car));
var objBmw = new Bmw();
console.log("BMW price is ".concat(objBmw.price(), " and colour is ").concat(objBmw.color()));
var objAudi = new Audi();
console.log("Audi price is ".concat(objAudi.price(), " and colour is ").concat(objAudi.color()));
