import { useState } from "react";
function CourseList(){
    const[courses,setCourses]=useState([
        {id:100, name:'JAVASCRIPT'},
        {id:200, name:'PYTHON'},
        {id:300, name:'JAVA'},
        {id:400, name:'HTML'},
       
    ])
    const handleButton=(id)=>{
        const newCourses=courses.filter((c)=>c.id!==id);
        setCourses(newCourses)
    }
    return(
        <div>
            <h2>Courses:</h2>
            {
                courses.map((c)=>(
                 <div key={c.id} >{c.name}   
                 <button onClick={()=>handleButton(c.id)}>Delete</button>
                 </div>
                ))
            }
        </div>
    )
}
export default CourseList;