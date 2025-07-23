import { useState } from "react";


function Showlist() {
    const names=[{id:1,name:"Sanju",age:"20"},
        {id:2,name:"Saanu",age:"21"},
        {id:3,name:"Ashu",age:"23"},
        {id:4,name:"Alva",age:"24"},
        {id:5,name:"Rai",age:"25"},
            ]
             return(
        <div>
            <h2>Users</h2>
            {
                names.map((names)=><p key={names.id}>{names.name}</p>)
            }
            </div>
    )
} 

  


function Hidelist() {
  return <p>No users</p>;
}

function NameList5() {
  const [showlist, setShowlist] = useState(true);

  return (
    <div>
      <button onClick={() => setShowlist(!showlist)}>
        {showlist ? "Hide" : "show"}
      </button>

      {showlist ? <Showlist /> : <Hidelist/>}
    </div>
  );
}

export default NameList5;
