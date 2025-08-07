import Second from "./SecondError";


function FirstError(props){
/* try{ */
/* throw new Error("something") */
/* } */
/* catch{
     return <p>Something happened</p>
} */
    return(
        <div>
            <h2>This is First Error comp</h2>
            <h3>{props.name}</h3>
          <Second/>
            </div>
    )
}
export default FirstError;