/* import { useState,useEffect } from "react";

function FourthComp(){
    const[count,setCount]=useState(0)
    const[theme,setTheme]=useState("light")
    useEffect(()=>{
    console.log("useefect called");
console.log(`Count:${count}`);
console.log(`Theme:${theme}`)})
    return(
        <div>
            <h1>Fourth omponent:</h1>
            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button><br></br>
            <h2>Theme:{theme}</h2>
            <button onClick={()=>setTheme(theme===`light` ?`dark`:`light`)}>Change</button>
        </div>
    )
}
export default FourthComp; */




//use state callled for one state

/* import { useState,useEffect } from "react";

function FourthComp(){
    const[count,setCount]=useState(0)
    const[theme,setTheme]=useState("light")
    useEffect(()=>{
    console.log("useefect called");
console.log(`Count:${count}`);
console.log(`Theme:${theme}`)},[theme])
    return(
        <div>
            <h1>Fourth omponent:</h1>
            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button><br></br>
            <h2>Theme:{theme}</h2>
            <button onClick={()=>setTheme(theme===`light` ?`dark`:`light`)}>Change</button>
        </div>
    )
}
export default FourthComp;
 */



//use state callled for one state

import { useState,useEffect } from "react";

function FourthComp(){
    const[count,setCount]=useState(0)
    const[theme,setTheme]=useState("light")
useEffect(()=>{
    console.log(" Count useefect called");
console.log(`Count:${count}`);
},[count])
    useEffect(()=>{
    console.log(" Theme useefect called");

console.log(`Theme:${theme}`)},[theme])
    return(
        <div>
            <h1>Fourth omponent:</h1>
            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button><br></br>
            <h2>Theme:{theme}</h2>
            <button onClick={()=>setTheme(theme===`light` ?`dark`:`light`)}>Change</button>
        </div>
    )
}
export default FourthComp;