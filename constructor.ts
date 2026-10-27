class student {
    name : string;
    place : string;
    age : number
    constructor(studentname : string,studentplace : string,studentage : number){
        this.name = studentname;
        this.place= studentplace;
        this.age = studentage;
    }
    stdDetails (){
        console.log("The name of the student is ",this.name)
        console.log("The student comes from ",this.place);
        console.log("The student age is ",this.age);
    }
}
const stdref = new student("harish","chennai",16)
stdref.stdDetails()