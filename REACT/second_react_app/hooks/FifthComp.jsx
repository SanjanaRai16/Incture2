/* import { useState } from "react"
function FifthComp(){
    const[count,setCount]=useState(0)
    const[number,setNumber]=useState(10)
    function expFunc(num){
        console.log("expensive function called")

        for( let i=1;i<10000000;i++)
        {
             return num*num
        }
    }
    const result=expFunc(number)

    
    return(
        <div>
            <h2>Fifth</h2>
            <h2>Result:{result}</h2>
            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>UpdateCount</button>
            <h3>Number:{number}</h3>
            <button onClick={()=>setNumber(number+5)}>UpdateNumber</button>

        </div>
    )
}
export default FifthComp; */


//USEMEMO

import { useState,useMemo } from "react"
function FifthComp(){
    const[count,setCount]=useState(0)
    const[number,setNumber]=useState(10)
    function expFunc(num){
        console.log("expensive function called")

      for(let i=0;i<1000000;i++)
        {
             return num*num
        }
    }
    const result=useMemo(()=>expFunc(number),[number]);

    
    return(
        <div>
            <h2>Fifth</h2>
            <h2>Result:{result}</h2>
            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>UpdateCount</button>
            <h3>Number:{number}</h3>
            <button onClick={()=>setNumber(number+5)}>UpdateNumber</button>

        </div>
    )
}
export default FifthComp;