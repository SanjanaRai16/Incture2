import { useRef,useState } from "react"
import Child from "./Child";
function Parent(){
    const inputRef=useRef(null);
   
    function handlebutton()
    {
        
        inputRef.current.style.color="red"

    }
    return(
        <div>
            <h2>Parent Component</h2>
            <Child ref={inputRef}/><br></br>
            <button onClick={handlebutton}>Update</button>
        </div>
    )

}
export default Parent;
