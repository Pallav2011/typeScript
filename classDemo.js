var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Student;
}());
var stud = new Student("Pandurang", "Ranpise");
console.log("First name is ".concat(stud.firstName, " and last name is ").concat(stud.lastName));
