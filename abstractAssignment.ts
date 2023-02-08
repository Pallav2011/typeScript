abstract class Car{
    wheel():string{
        return '4 wheeler';
    }
    checkAC():string{
        return 'AC is Available';
    }
    callFacility():string{
        return 'call facility supported'
    }
    abstract price():number;
    abstract getTotalSeats():number;
    abstract color():string;
    abstract isGPS():string;
}
class Toyota extends Car {
    price(): number {
        return 1000000;
    }
    getTotalSeats(): number {
       return 5;
    }
    color(): string {
       return 'White';
    }
    isGPS(): string {
        return 'Not supported';
    }
}
class Hyundai extends Car{
    price(): number {
       return 9000000;
    }
    getTotalSeats(): number {
        return 7;
    }
    color(): string {
        return 'gray';
    }
    isGPS(): string {
        return 'Supported';
    }
}
let objToyota=new Toyota();
console.log(`Toyota car is ${objToyota.wheel()}`);
console.log(`${objToyota.checkAC()} in Toyota car`);
console.log(`Toyota ${objToyota.callFacility()}`);
console.log(`Toyota car price is ${objToyota.price()}`);
console.log(`Toyota car have ${objToyota.getTotalSeats()} seats`);
console.log(`Toyota car color is ${objToyota.color()}`);
console.log(`Toyota cars are ${objToyota.isGPS()} GPS `);
console.log(`---------------------------------------`);
let objHyundai=new Hyundai();
console.log(`Hyundai car is ${objHyundai.wheel()}`);
console.log(`${objHyundai.checkAC()} in Hyundai car`);
console.log(`Hyundai ${objHyundai.callFacility()}`);
console.log(`Hyundai car price is ${objHyundai.price()}`);
console.log(`Hyundai car have ${objHyundai.getTotalSeats()} seats`);
console.log(`Hyundai car color is ${objHyundai.color()}`);
console.log(`Hyundai cars are ${objHyundai.isGPS()} GPS `);