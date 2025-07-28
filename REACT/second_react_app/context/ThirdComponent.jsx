/* function ThirdComponent(props){
    return(
        <div>
            <h2>Third Component</h2>
            <h2>Welcome :{props.username}</h2>
        </div>
    )
}
export default ThirdComponent; */
import UserContext from "./userContext";
import { useContext } from "react";
function ThirdComponent(){
    const username=useContext(UserContext)
    return(
       
        <div>
            <h2>Third Component</h2>
            <h2>Welcome :{username}</h2>
        </div>
    )
}
export default ThirdComponent; 

