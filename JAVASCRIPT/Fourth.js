/* import {add,sub} from "./Third.js"

let result=add(10,20)
console.log("result",result)
let result2=sub(10,20)
console.log("result",result2) */

/* import add from "./Third.js"

let result=add(10,20)
console.log("result",result)

 */





let name="Sanjana";
let city="Mangaluru";
let profession="SDE";

/* console.log("Welcome to Javascript Session.My name is:",name,"I am from",city,"Profession is:",profession) */
//To avoid using alternate "" and variable name we can use ``
console.log(`My name is:${name}.My profession is${profession}`)
//array destructing
let num=[10,20,30,40];
let[x,y,z,a]=num;

console.log(x)
console.log(y)


let second_num=[...num,50,50]
console.log(second_num)



//RESTOPERATOR
function displayName(...names){
    console.log(names);
}
displayName("ashu","sanju","rai")
//RESTOPERATOR
function sum(...numbers){
    return numbers.reduce((a,b)=>a+b)
}
console.log(sum(1,2,3,4,5,6,7,8,9))