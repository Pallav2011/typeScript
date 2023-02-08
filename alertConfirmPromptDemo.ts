var mathMarks = Number(prompt("Enter marks of maths:"));
var physicsMarks=Number(prompt("Enter marks of physics:"));
var chemMarks=Number(prompt("Enter marks of chemistry:"));
confirm(`You entered marks are: \n 1)Maths=${mathMarks}\n 2)physics=${physicsMarks}\n 3)Chemistry=${chemMarks}\n Confirm your marks.`);
var totalMarks=mathMarks+physicsMarks+chemMarks;
var average:number=Number((totalMarks/3).toFixed(2));
if(average<70){
alert(`Your marks total is: ${totalMarks}\n Average is ${average}\n Grade is :C`);
}else{
    if(average>70 ||average<90){
        alert(`Your marks total is: ${totalMarks}\n Average is ${average}\n Grade is :C`);
        }else{
            if(average>90){
                alert(`Your marks total is: ${totalMarks}\n Average is ${average}\n Grade is :C`);
                }
        }
       
}

