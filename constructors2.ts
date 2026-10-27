class Employee {
    readonly Ename : string;
    Erole :string;
    Esalary ?: number
    constructor(EmpName : string,EmpRole : string,EmpSalary?:number){
        this.Ename = EmpName;
        this.Erole = EmpRole;
        this.Esalary = EmpSalary;
    }
    EmpDoc(){console.log(`The name of the employee is ${this.Ename} \nThe Employee role is ${this.Erole} \nThe Annul income of the employee is ${this.Esalary}`)}
}
const Eref = new Employee("Sanjay","Developer");
// Eref.Ename = "deepak";
Eref.EmpDoc()
