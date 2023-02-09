var Details = /** @class */ (function () {
    // constructor is defined to intialise properties
    function Details(name, age, adress, moNo) {
        this.name = name;
        this.age = age;
        this.adress = adress;
        this.moNo = moNo;
    }
    // method is defined to show the members of class
    Details.prototype.show = function () {
        console.log("Name:".concat(this.name, "\n Age:").concat(this.age, "\n Address:").concat(this.adress, " \n Mobile No:").concat(this.moNo));
    };
    return Details;
}());
// object created of class- it can call the constructor
var objDetails = new Details("Pandurang", 25, "Pandharpur", 9145437409);
objDetails.show(); // call the method of class
