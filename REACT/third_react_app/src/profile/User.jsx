import { useParams } from "react-router-dom"
import User1 from "./User1";
import User2 from "./User2";
import User3 from "./User3";
function User(){
    const{userName}=useParams();
    return(
        <div>
            {/* <h2>Welcome:{userName}</h2>
            <p>This is {userName} component</p> */}

            {userName==="ram" ? <User1/>:
            userName==="Sachin" ? <User2/>:
            userName==="Ajay" ? <User3/>:<h2>Guest Component</h2>}
        </div>
    )
}
export default User;