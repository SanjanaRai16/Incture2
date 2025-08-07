import { useState } from "react";

function StateComp() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>State Component in TypeScript</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default StateComp;