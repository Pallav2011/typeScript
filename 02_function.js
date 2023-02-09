console.log("----------------Normal function---------------------");
function normalFunction() {
    console.log("This is normal function");
}
normalFunction();
console.log("----------------Function Expression----------------------");
var functionExpression = function () {
    return 10;
};
var val = functionExpression();
console.log("Return value from function expression is:".concat(val));
console.log("----------------function with argument but no return value-----------------");
function addition(val1, val2) {
    console.log("Addition of ".concat(val1, " and ").concat(val2, " is ").concat(val1 + val2));
}
addition(25, 45);
console.log("----------------function with no argument but return value-----------------");
function substract() {
    var a = 50, b = 25;
    console.log("Substraction of ".concat(a, " and ").concat(b, " is ").concat(a - b));
}
substract();
console.log("----------------function with argument with return value-------------------");
function multiply(val1, val2) {
    return val1 * val2;
}
console.log("Multiplication of 5 and 9 is ".concat(multiply(5, 9)));
console.log("----------------Arrow function-----------------------------");
var showName = function (val) { return console.log("Your name is ".concat(val)); };
showName("Pandurang");
