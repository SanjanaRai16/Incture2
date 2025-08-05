import { useState } from "react";
function ThirdForm(){
     const[errors,setErrors]=useState({});
    const[formData,setFormData]=useState({
        name:'',
        email:''
    });
    const handleChange=(event)=>{
       setFormData({
        ...formData,
       [event.target.name]:event.target.value
    });
};
const validate=()=>{
    let errorlist={};
    if(!formData.name.trim())
    {
        errorlist.name="Name is needed"
    }
    if(!formData.email.trim())
    {
        errorlist.name="email is needed"
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
        errorlist.name="email is invalid"
    }
    return errorlist;
};
const handleSubmit=(event)=>{
    event.preventDefault();
    const validateErrors=validate();
    setErrors(validateErrors);
    if(Object.keys(validateErrors).length===0){
        alert(`Name:${formData.name},Email:${formData.email}`)
    }
}

 
    return(
        <div> <form onSubmit={handleSubmit}>
            <div>
                <input name="name"  type="text"
                placeholder="enter name" value={formData.name} onChange={handleChange}/><br></br>
               {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
              <input name="email"  type="email"
                placeholder="enter email" value={formData.email} onChange={handleChange}/><br></br>
               {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
                <button type="submit">Submit</button>
                </div>
            
</form>
        </div>
    )
}
export default ThirdForm;