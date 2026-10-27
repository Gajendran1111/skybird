// callback 

function morning (callback :()=> void){
    setTimeout(() => {
        console.log("good morning");
        callback()
    }, 5000);
}
function evening (callback :()=> void){
    setTimeout(() => {
        console.log("good evening");
        callback()
    }, 3000);
}
// callback hell 
function night (callback :()=> void){
    setTimeout(() => {
        console.log("good night");
        callback()
    }, 2000);
}
morning(()=>{
    evening(()=>{
        night(()=>{})
    })
})
