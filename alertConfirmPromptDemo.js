var mathMarks = Number(prompt("Enter marks of maths:"));
var physicsMarks = Number(prompt("Enter marks of physics:"));
var chemMarks = Number(prompt("Enter marks of chemistry:"));
confirm("You entered marks are: \n 1)Maths=".concat(mathMarks, "\n 2)physics=").concat(physicsMarks, "\n 3)Chemistry=").concat(chemMarks, "\n Confirm your marks."));
var totalMarks = mathMarks + physicsMarks + chemMarks;
var average = Number((totalMarks / 3).toFixed(2));
if (average < 70) {
    alert("Your marks total is: ".concat(totalMarks, "\n Average is ").concat(average, "\n Grade is :C"));
}
else {
    if (average > 70 || average < 90) {
        alert("Your marks total is: ".concat(totalMarks, "\n Average is ").concat(average, "\n Grade is :C"));
    }
    else {
        if (average > 90) {
            alert("Your marks total is: ".concat(totalMarks, "\n Average is ").concat(average, "\n Grade is :C"));
        }
    }
}
