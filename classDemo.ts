class Student {
    public firstName:String;
    public lastName:String;

    constructor(firstName:String,lastName:String) {
        this.firstName=firstName;
        this.lastName=lastName;
    }
}
var stud=new Student("Pandurang","Ranpise");
console.log(`First name is ${stud.firstName} and last name is ${stud.lastName}`);
