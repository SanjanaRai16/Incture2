/* import {useState} from "react"
function NewComp(){
    const [show,setShow]=useState(true);
    return(
        <div>
            <button onClick={()=>setShow(!show)}>
                {show?"Hide Text":"Show Text"}
            </button>
            {show&&<p>This is a secret message</p>}
        </div>
    )
}
export  default NewComp */

import { useState } from "react";

function ComponentA() {
  return <p>This is Component A</p>;
}

function ComponentB() {
  return <p>This is Component B</p>;
}

function NewComp() {
  const [showA, setShowA] = useState(true);

  return (
    <div>
      <button onClick={() => setShowA(!showA)}>
        {showA ? "SHOW B" : "SHOW A"}
      </button>

      {showA ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default NewComp;
