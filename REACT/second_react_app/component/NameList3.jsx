import { useState } from "react";

function NameList3(){


const[names,setNames]=useState([
        {id:1,name:"Sanju",age:"20"},
        {id:2,name:"Saanu",age:"21"},
        {id:3,name:"Ashu",age:"23"},
        {id:4,name:"Alva",age:"24"},
        {id:5,name:"Rai",age:"25"},
            
           
        ])
     const handleButton=(id)=>{
        const newNames=names.filter((n)=>n.id!==id);
        setNames(newNames)
    } 

return(
 <div>
    <h2>TASK 3</h2>
        <table border="2" cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    names.map((n)=>(
                        <tr key={n.id}>
                            <td>{n.id}</td>
                            <td>{n.name}</td>
                            <td>{n.age}</td>
                             { <td>
                                 <button onClick={()=>{handleButton(n.id)}}>Delete</button>
                            </td> }
                        </tr>
                    ))
                }
            </tbody>
        </table>
   
 </div>
)
}
export default NameList3;