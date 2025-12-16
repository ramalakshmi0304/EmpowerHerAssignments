import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // runs ONLY when count changes
  useEffect(() => {
    if (count !== 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }
  }, [count]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
