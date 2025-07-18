class Employee{
    constructor(name){
        this.name=name;
    }
    greet()
    {
        console.log(`My name is ${this.name}.`);
    }
}
let emp1=new Employee("ravi")
let emp2=new Employee("abhhi")
let emp3=new Employee("sonu")
emp1.greet();
emp2.greet();
emp3.greet();




//map and set
let emp=new Map();
emp.set("id","111")
emp.set("name","sanju")
emp.set("city","kudla")

console.log(emp.get("id"),emp.get("name"),emp.get("city"))


let set=new Set();
set.add(10);
set.add(30);
set.add(10);
set.add(20);
console.log(set)