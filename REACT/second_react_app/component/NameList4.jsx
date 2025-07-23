import { useState } from "react";

function NameList4() {
  const [names, setNames] = useState([
    { id: 1, name: "Sanju", age: "20" },
    { id: 2, name: "Saanu", age: "21" },
    { id: 3, name: "Ashu", age: "23" },
  ]);
  const [input, setInput] = useState("");

  const addUser = () => {
    const nextId=names.length+1
    setNames([...names, { id: nextId, name: input, age: '0' }]);
    
  };

  

  return (
    <div>
      <h2>TASK 4</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={input}
         onChange={(event)=>setInput(event.target.value)}
      />
      <button onClick={addUser}>Add</button>

      <table border="2" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {names.map((n) => (
            <tr key={n.id}>
              <td>{n.id}</td>
              <td>{n.name}</td>
              <td>{n.age}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NameList4;

