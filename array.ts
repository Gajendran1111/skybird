// push 
let pus : number[] = [10,20,30,40,50]
pus.push(60)
console.log(pus);

// pop
let po : number[] = [10,20,30,40,50]
po.pop()
console.log(po);

// shift
let shi : number[] = [10,20,30,40,50]
shi.shift()
console.log(shi);

// unshift
let unshi : number[] = [10,20,30,40,50]
unshi.unshift(9)
console.log(unshi);

// splice
// variable name.splice(index, splicenum, value)

let str : string[] = ["sunday","monday","tuesday","thursday","friday","saturday"]
str.splice(3,1,"wednesday")
console.log(str);

// sort
let abc : string[] = ['d','a','b','f','c','e']
console.log(abc.sort());

// reverse

let strr : string = "olleh";
console.log(strr.split('').reverse().join(''));
