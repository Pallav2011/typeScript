interface IProduct{
    id:number;
    name:string;
    price?:number;
}
var obj: IProduct={
    id:101,
    name:"Pandurang"
}
console.log(obj.id);
console.log(obj.name);
console.log(obj.price);