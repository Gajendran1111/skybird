// function types 

// syntax
// function name ():type{}

// named function

function fun() :void{
    console.log("function topic");
}
fun();

// function with return type:

function hi(a : string) : any{
    console.log(a);
}
hi("hello");

function js(a : string) : any{
    return a
}
console.log(js("hello"));


// named function with rest parameter: (multiple values for parameter)

// task

// named function with optional parameter:

function opt (a : string, b : number, c ?: string): any{
    return a+b
}
console.log(opt("hello ",20));

// named function with Default parameter:

function def (name : string, place : string,age : number = 35) : any {
    return name+place+age
}
console.log(def("dhanush ","chennai "));
// console.log(def("dhanush ","chennai ",68));

// Anonymous/Nameless Function:

let store = function (ab : string) : string{
    return ab
}
console.log(store("nameless function"));

// Arrow/Lambda Function:

// syntax 
// ()=>{}

let aro =(ar : string)=>{console.log(ar);}
aro("arrow function");
