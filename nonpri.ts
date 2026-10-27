// array 

// type 1
let arr : string[] = ["hello","java","welcome"];
console.log(arr[1]);

// type 2
let arr2 : Array<string> = ["sunday","monday","tuesday"];
console.log(arr2);

// tuple 

let tup : [string,number,string] = ["venkat",646891841,"chennai"];
console.log(tup);

// object 

// type 1 
let obj : any ={
    name : "balaji",
    place : "chennai",
    age : 545,
    id : 465
}
console.log(obj.name);

// type 2 
type t = {
    nam : string;
    place : string;
    age : number;
    id : number
}
let obj2 : t = {
    nam : "jeeva",
    place : "chennai",
    age : 35,
    id : 545
}
console.log(obj2);
