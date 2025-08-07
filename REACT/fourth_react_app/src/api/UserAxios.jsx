import {useState,useEffect} from 'react';
import axios from 'axios'
const UserListAxioS=()=>
{
    const [users,setUsers]=useState([]);
        const[loading,setLoading]=useState(true)
        const[error,setErrors]=useState("");
        useEffect((response)=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                setUsers(response.data)
                setLoading(false);
            })
},[])
if(loading){
    return <p>Loading user detailsssssssssss</p>
}
if(error){
    return <p>Error:{error}</p>
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
export default UserListAxioS;

