import { useEffect } from "react";
function SecondComp(){
    useEffect(()=>{
        console.log("UseEffect Called")
    },[])
    return(
        <div>
            <h1>Second component with UseEffect Hook</h1>
        </div>
    )
}
export default SecondComp;
//MOUNTING OHASE