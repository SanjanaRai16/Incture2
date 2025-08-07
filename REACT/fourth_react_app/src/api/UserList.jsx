import { useState,useEffect } from "react";
function UserList(){
    const [users,setUsers]=useState([]);
    const[loading,setLoading]=useState(true)
    const[error,setErrors]=useState(null);
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        if(!response.ok){
        throw new Error("Something went wrong");
    }
    return response.json();
    })
    .then((data)=>{
        setUsers(data);
        setLoading(false);
    })
    .catch((err)=>{
        setErrors(err.message);
        setLoading(false);
    })
},[])
if(loading){
    return <p>Loading user detailsssssssssss</p>
}
if(error){
    return <p>Error</p>
}
return(
    <div>
        <h2>User List</h2>
        <ul>
            {users.map((users=>(
                <li key={users.id}>
                    <strong>{users.name}</strong>-{users.email}
                </li>
            )))}
        </ul>
    </div>
)
}
export default UserList;