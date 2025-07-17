


/* let num=16;
if(num==2)
{
  console.log("prime")
}


if(num%2==0)
  {
  console.log("not prime");
}
else 
{
  console.log("prime")
} */
/* for(let i=1;i<1000;i++){

let flag=true;
for(let j=2;j<=i/2;j++)
{
 if(i%j==0)
  {
  flag=false;
  break;
 }
}
if(flag==false)
{
  console.log(i)
}

} */

/* et num=[10,20,30,40]
console.log(num)
let num1=new Array(10,20,30,40,);
num1[0]=100
console.log(num1.length)
for(let i =0;i<num1.length-1;i++)
{
  console.log(num1[i])
}
for(let x of num){
  console.log(x);
}
num1.push(200)
  console.log(num1)
  num1.unshift(400)
  console.log(num1)
  num1.pop();
  console.log(num1)
  num1.shift();
   console.log(num1)
   console.log(num1.lastIndexOf(20));
   console.log(num1.indexOf(20))
num1.sort();
 console.log(num1) */
/* let data=[230,10,34,231];
data.sort();
console.log(data)
data.reverse();
console.log(data) */
/* et arr=[10,20,56,231,24]

for(let i=0;i<arr.length-1;i++)
{

for(let j=0;j<arr.length-i-1;j++)
  { 
    if(arr[j]>arr[j+1])
    {
      let temp=arr[j]
      arr[j]=arr[j+1]
      arr[j+1]=temp;
    }

  }
  
  
}
 console.log(arr);

 */
//Day 3
function display()
{


 console.log("Good afternoon")
  console.log("How are you")
  console.log("Welcome to Javascript session")
}
  display();
  console.log("...after10minutes")
  display();
  function Greet(name){
    console.log("welcome"+name)
  }
Greet("Sanju")
function add(a,b){
    return a+b;
  }
let result=add(20,30);
console.log("result",result)

let Display=function(name){
  console.log("welcome:",name)
}
Display("ram");



let isplay=function(x,y){
  return x+y;
}
console.log("res:",isplay(1,2));



let sum=function(r,s){
  console.log(r+s)

}
sum(1,2)

/* let display2=(name1)=>{
  console.log("welcome:",name1)
}
display2("ashu") */
let display2=name1=>
  console.log("welcome:",name1)

display2("ashu")
/* let addition=(u,v)=>console.log(u+v)
addition(2,3)
 */
let addition=(u,v)=>u+v
console.log("add:",addition(2,3))


