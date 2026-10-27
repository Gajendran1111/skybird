// map

// variable name.map((value, index,accumulator)=>) 

let ary : number[] = [10,20,30,40,50]
let proc = ary.map((a,b,c)=>c*5)
console.log(proc);

// filter
// variable name.filter((value, index,accumulator)=>) 

let f : number[] = [54,616,49,84,61,65,198,43,29,15,4,50,64,631,94,62,46,5,165,54,61,891]
let val = f.filter((x,y,z)=>x>10)
console.log(val);

// reduce
// variable name.filter((accumulator,currentvalue)=>) 

let r : number[] = [10,20,30,40,50]
let red = r.reduce((j,k)=>j-k)
console.log(red);
