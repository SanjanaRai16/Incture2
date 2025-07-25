//without usref


/* function SixthComp(){
    function focus(){
       let input_obj= document.getElementById("input")
       input_obj.focus();
    }
    return(
        <div>
            <h1>Sixth Element</h1>
            <input id="input" type="text"/><br></br>
            <button onClick={focus}>Focus Input</button>
        </div>
    )
}
export default SixthComp; */



import { useRef } from "react";
function SixthComp(){
    const inputRef=useRef();
    function focus(){
       inputRef.current.focus();
       inputRef.current.value="React"
       inputRef.current.style.color="red"
       inputRef.current.style.display="none"
    }
    return(
        <div>
            <h1>Sixth Element</h1>
            <input  type="text" ref={inputRef}/><br></br>
            <button onClick={focus}>Focus Input</button>
        </div>
    )
}
export default SixthComp;