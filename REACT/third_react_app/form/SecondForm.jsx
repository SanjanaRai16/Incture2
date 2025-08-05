import { useRef } from "react";
function SecondForm(){
    const nameRef=useRef();
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`name:${nameRef.current.value}`)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef}/><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}
export default SecondForm;