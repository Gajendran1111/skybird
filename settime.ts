// settimeout

// syntax 
// setTimeout(() => {}, timeout);

function first () : void{
    setTimeout(() => {
        console.log("loading");
    }, 5000);
}
function secon () : void{
    setTimeout(() => {
        console.log("loading successful");
    }, 2000);
}
first();
secon();