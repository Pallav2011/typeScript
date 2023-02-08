var mathMarks = Number(prompt("Enter marks of maths:"));
var physicsMarks = Number(prompt("Enter marks of physics:"));
var chemMarks = Number(prompt("Enter marks of chemistry:"));
console.log("You entered marks are: \n 1)Maths=".concat(mathMarks, "\n 2)physics=").concat(physicsMarks, "\n 3)Chemistry=").concat(chemMarks));
var totalMarks = mathMarks + physicsMarks + chemMarks;
var average = Number((totalMarks / 3).toFixed(2));
var grade = "";
if (average < 70) {
    grade = "C";
}
else {
    if (average > 70 || average < 90) {
        grade = "B";
    }
    else {
        if (average > 90) {
            grade = "A";
        }
    }
}
console.log("Your total marks are: ".concat(totalMarks, "\n Average is: ").concat(average, "\n Grade is: ").concat(grade));
