class Details{
    // variables are declared with modifiers
    public name:string; 
    public age:number;
    public adress:string;
    private moNo:number;
    // constructor is defined to intialise properties
    constructor(name:string,age:number,adress:string,moNo:number){
        this.name=name;
        this.age=age;
        this.adress=adress;
        this.moNo=moNo;
    }
    // method is defined to show the members of class
    show(){
        console.log(`Name:${this.name}\n Age:${this.age}\n Address:${this.adress} \n Mobile No:${this.moNo}`);
        
    }
}
  // object created of class- it can call the constructor
let objDetails=new Details("Pandurang",25,"Pandharpur",9145437409);
objDetails.show();          // call the method of class