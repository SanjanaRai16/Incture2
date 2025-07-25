/* function FirstComp(){
    let count=0;
    function increment()
    {

        count++;
        console.log(`Count:${count}`);
    }
    console.log("Rendered")
    return(
        <div>
            <h1>Functional Component without state</h1>
            <h2>Count:{count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default FirstComp; */


import { useState } from "react";
function FirstComp(){
   /*  let count=0; */
   const[count,setCount]=useState(0)
    function increment()
    {

        setCount(count+1);
        console.log(`Count:${count}`);
    }
    console.log("Rendered")
    return(
        <div>
            <h1>Functional Component without state</h1>
            <h2>Count:{count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default FirstComp;