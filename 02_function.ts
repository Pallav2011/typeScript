console.log(`----------------Normal function---------------------`);
function normalFunction():void{        
    console.log(`This is normal function`);
}
normalFunction();                  
console.log(`----------------Function Expression----------------------`);
var functionExpression=function():number{  
    return 10;                              
}
let val=functionExpression();             
console.log(`Return value from function expression is:${val}`);
console.log(`----------------function with argument but no return value-----------------`);
function addition(val1:number,val2:number):void{
    console.log(`Addition of ${val1} and ${val2} is ${val1+val2}`);
}
addition(25,45);
console.log(`----------------function with no argument but return value-----------------`);
function substract(){
    let a:number=50,b:number=25;
    console.log(`Substraction of ${a} and ${b} is ${a-b}`);
}
substract();
console.log(`----------------function with argument with return value-------------------`);
function multiply(val1,val2){
    return val1*val2;
}
console.log(`Multiplication of 5 and 9 is ${multiply(5,9)}`);
console.log(`----------------Arrow function-----------------------------`);
let showName=val=>console.log(`Your name is ${val}`);
showName("Pandurang");
