/* import ThirdComponent from "./ThirdComponent";
function SecondComponent(props){
    return(
        <div>
            <h2>Second Component</h2>
            <ThirdComponent username={props.username}/>
        </div>
    )
}
export default SecondComponent; */
import ThirdComponent from "./ThirdComponent";
function SecondComponent(){
    return(
        <div>
            <h2>Second Component</h2>
            <ThirdComponent/>
        </div>
    )
}
export default SecondComponent;