// Regular properties:

interface reg {
    name : string;
    place : string;
    pin : number
}
const objt : reg =  {
    name :  "jai",
    place : "chennai",
    pin : 6000077
}
console.log(objt);

// Optional properties:

interface opt {
    name : string;
    place : string;
    pin ?: number
}
const objts : opt =  {
    name :  "jai",
    place : "chennai",
}
console.log(objts);

// Readonly properties & funtion types:

interface read {
    readonly name : string;
    place : string;
}
const obj2 : read = {
    name : "sanjay",
    place : "chennai",
}
// obj2.name = "harish"
console.log(obj2);

// Extending Interfacer - 'extends'

interface father1 {
    gold():void;
    silver():void;
}
class child1 implements father1 {
    gold(): void {
        console.log("1kg gold");
    }
    silver(): void {
        console.log("1kg silver");
        
    }
}
const refinter = new child1();
refinter.gold();
refinter.silver()