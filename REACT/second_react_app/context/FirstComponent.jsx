import SecondComponent from "./SecondComponent";
/* function FirstComponent(props){
    return(
        <div>
            <h2>First Component</h2>
            <SecondComponent username={props.username}/>

        </div>
    )
}
export default FirstComponent; */

function FirstComponent(){
    return(
        <div>
            <h2>First Component</h2>
            <SecondComponent/>

        </div>
    )
}
export default FirstComponent;