var mathMarks = Number(prompt("Enter marks of maths:"));
var physicsMarks=Number(prompt("Enter marks of physics:"));
var chemMarks=Number(prompt("Enter marks of chemistry:"));
console.log(`You entered marks are: \n 1)Maths=${mathMarks}\n 2)physics=${physicsMarks}\n 3)Chemistry=${chemMarks}`);
var totalMarks=mathMarks+physicsMarks+chemMarks;
var average:number=Number((totalMarks/3).toFixed(2));
var grade:string="";
if(average<70){
grade="C";
}else{
    if(average>70 || average<90){
        grade="B";
    }else{
        if(average>90){
            grade="A";
        }
    }
}
console.log(`Your total marks are: ${totalMarks}\n Average is: ${average}\n Grade is: ${grade}`);
