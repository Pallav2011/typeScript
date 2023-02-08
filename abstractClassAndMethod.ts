abstract class Car{
    abstract price():number;
    abstract color():string;
}

class Bmw extends Car{
   public price(): number {
       return 100000;
   }
   public color(): string {
       return "Red";
   }
}

class Audi extends Car{
public price(): number {
    return 200000;
}
public color(): string {
    return "Blue";
}
}
let objBmw=new Bmw();
console.log(`BMW price is ${objBmw.price()} and colour is ${objBmw.color()}`);
let objAudi=new Audi();
console.log(`Audi price is ${objAudi.price()} and colour is ${objAudi.color()}`);