import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(prev=> prev + 1);
  };

  return (
    <div>
       
        <p>Count:{count}times</p>
     <button onClick={handleClick}>ClickMe</button>

    </div>
  );
}
export default Counter;