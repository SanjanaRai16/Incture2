import {useState} from "react"
function NewComp(){
    const [show,setShow]=useState(true);
    return(
        <div>
            <button onClick={()=>setShow(!show)}>
                {show?"Hide Text":"Show Text"}
            </button>
            {show&&<p>This is a secret message</p>}
        </div>
    )
}
export  default NewComp