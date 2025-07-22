/* import { useState } from "react";



function Counter(){
    const [count,setCount]=useState(0);
    function updateData(){
        setCount(count+1)
        
    }
     console.log(".............................")
        return(
            <div>
                <p>Count Component</p>
                <h3>count:{count}</h3>
                <button onClick={updateData}>Increment data</button>
        </div>
    )
}
export default Counter;
 */






//ARROW FUNCTION
/* import { useState } from "react";



function Counter(){
    const [count,setCount]=useState(10);
    /* function updateData(){
        setCount(count+1)
        
    } */
     /* console.log(".............................")
        return(
            <div>
                <p>Count Component</p>
                <h3>count:{count}</h3>
                <button onClick={()=>setCount(count+1)}>Increment data</button>
                <button onClick={()=>setCount(count-1)}>Increment data</button>
                <button onClick={()=>setCount(count+1)}>Increment data</button>

        </div>
    )
}
export default Counter;
 */
/*  import { useState, useEffect } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  return (
    <div>
      <p>Count Component</p>
      <h3>count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment data</button>
      <button onClick={() => setCount(count - 1)}>Decrement data</button>
    </div>
  );
}

export default Counter;
 */
import  { useState } from 'react';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <button onClick={()=> (count>0)?setCount(count - 1):0}>Decrement</button>
      <button onClick={()=> setCount(initialCount)}>reset</button>;

    </div>
  );
}

export default Counter;
