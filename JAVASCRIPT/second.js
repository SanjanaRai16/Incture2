/* let display=setTimeout(()=>{
    console.log("welcome:")
},5000);
display; */

//CALLBACK
/* function Greet(name){
    console.log("hello:",name)
}
function sayBye()
{
    console.log("bye")
}
Greet("Sachin");
sayBye(); */



/* function Greet(name,callback){
    console.log("hello:",name)
    callback();
}
function sayBye()
{
    console.log("bye")
}
Greet("Sachin",sayBye);
 */

/* function Greet(name="guest"){
    console.log("welcome:",name);
    
    
}

Greet("RAVI")
Greet(); */




let employee={
    id:111,
    name:"Ajay",
    city:"Mangaluru"
}
/* console.log(employee)
console.log(employee.name)
console.log(employee["name"])
employee.salary=50000
console.log(employee) */
/* for(let key in employee){
    console.log("key:"+key+  "Value:"+employee[key])
} */
 let{id,name,city}=employee; 
console.log(id)
console.log(name)
console.log(city)
