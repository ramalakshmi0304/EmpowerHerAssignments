import { useState } from 'react'

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);

  const performAction = () => {
    if (operation === "add") {
      setResult(Number(num1) + Number(num2));
    } else if (operation === "sub") {
      setResult(Number(num1) - Number(num2));
    } else if (operation === "mul") {
      setResult(Number(num1) * Number(num2));
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

        <select value={operation}
        onChange={(e)=> setOperation(e.target.value)}
        >
    
        <option value="">Select Operation</option>
        <option value="add">Add</option>
        <option value="sub">Subtract</option>
        <option value="mul">Multiply</option>
       </select>

      <button onClick={performAction}>Perform Action</button>

      <h2>Result: {result}</h2>
    </div>
  );
};

export default Calculator;