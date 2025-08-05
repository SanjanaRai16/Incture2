import { useState } from "react";
function FirstForm(){
    const[formData,setFormData]=useState({name:"",email:""});
    const handleChange=(event)=>{
        const{name,value}=event.target;

    
    setFormData((prevData)=>({
        ...prevData,
        [name]:value
    }));
}
const handleSubmit=((event)=>{
    //event.preventDefault();
    alert(`Welcome :${formData.name} ,Email:${formData.email}`)
})
//console.log("Mounted")
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name"  type="text"
                placeholder="enter name" onChange={handleChange}/><br></br>
                <input name="email"  type="email"
                placeholder="enter email" onChange={handleChange}/><br></br>
                <button type="submit">Submit</button>
            

            </form>
         
        </div>
    )
}
 export default FirstForm;