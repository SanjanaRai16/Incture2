/* import { useState } from "react";
function FirstEvent(){
    const [text,setText]=useState('');
    const handleClick =(event)=>{
        alert("button clicked") 
        setText(event.target.value);
    }
    return(
        <div>
            <h2>React Events:</h2>
            <button onClick={handleClick}>Click</button> 
           <input type="text" placeholder="Enter Text" onChange={handleClick}/>
           <p>Your text:{text}</p>
        </div>
    )
}
export default FirstEvent; */

//formevent

/* import { useState } from "react";
function FirstEvent(){
    const [name,setName]=useState('');
    const handleSubmit =()=>{
        alert(`form submitted by:${name}`)
       
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Enter Name:</h2>
                <input type="text" value={name}
                onChange={(event)=>setName(event.target.value)}/><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default FirstEvent; */


//MOUSEEVENT
/* import { useState } from "react";
function FirstEvent(){
    const handleMouseEnter=()=>{
        console.log("mouse entered")

    }
        const handleMouseLeave=()=>{
        console.log("mouse left")

    } 
    
    return(
        <div  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
            width:"200 px",
            height:"200px",
            backgroundColor:"lightblue",
            textAlign:"center",
            lineHeight:"200px"

        }}>
            HOVER OVER ME!!!!!!
            
        </div>
    )
}

export default FirstEvent; */




/* import { useState } from "react";
function FirstEvent(){
    const greet=(name)=>{
       alert(`Welcome ${name} to react session`)

    } 
    
    return(
        <div >
            <button onClick={()=>greet("Ajay")}>Greet</button> 
       
        </div>
    )
}

export default FirstEvent; */


/* function FirstEvent(){
    const handleKeyDown=(event)=>{
       alert(`Key pressed:${event.key}`)

    } 
    
    return(
        <div >
           <h2>Type Something:</h2>
           <input type="text" onKeyDown={handleKeyDown}/>
       
        </div>
    )
}

export default FirstEvent; 


 */


/* function FirstEvent(){
    const handleKeyUp=(event)=>{
       alert(`Key pressed:${event.key}`)

    } 
    
    return(
        <div >
           <h2>Type Something:</h2>
           <input type="text" onKeyUp={handleKeyUp}/>
       
        </div>
    )
}

export default FirstEvent; 


 */
function FirstEvent(){
    const handleKeyDown=(event)=>{
        if(event.key==='Enter'){
       alert(`Key pressed:${event.key}`)}
    } 
    
    return(
        <div >
           <h2>Type Something:</h2>
           <input type="text" onKeyDown={handleKeyDown}/>
       
        </div>
    )
}

export default FirstEvent; 


