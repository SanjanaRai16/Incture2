


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
let arr=[10,20,56,231,24]

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
