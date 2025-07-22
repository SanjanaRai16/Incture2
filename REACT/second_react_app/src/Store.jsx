/* function Store()
{
    let  data=10;
    function updateData(){
    data=20;
        alert(`data:${data}`)
    }
    console.log(".............................")
        return(
            <div>
                <p>Store Component</p>
                <h3>Data:{data}</h3>
                <button onClick={updateData}>Update data</button>
        </div>
    )
}
export default Store; */

import { useState } from "react";



function Store(){
    const [data,setData]=useState(10);
    function updateData(){
        setData(20);
        alert(`data:${data}`);
    }
     console.log(".............................")
        return(
            <div>
                <p>Store Component</p>
                <h3>Data:{data}</h3>
                <button onClick={updateData}>Update data</button>
        </div>
    )
}
export default Store;
