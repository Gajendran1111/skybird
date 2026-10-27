// class Home {
//     colour():void{
//         console.log("The home fully coloured by white");
//     }
//     room() :void{
//         console.log("I need 2bhk rooms");
//     }
//     Parking():void{
//         console.log("I need double car space parking");
//     }
// }
// const ref = new Home();
// ref.colour();
// ref.room();
// ref.Parking();


class one {
    land():void{
        console.log("2acer land");
        
    }
}
class second extends one{
    cash():void{
        console.log("1lakh");
    }
    land(): void {
        console.log("100g gold");
    }
}
const ref = new second();
ref.cash()
ref.land()
