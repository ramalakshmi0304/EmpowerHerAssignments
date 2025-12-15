import React,{useState} from 'react';

const Counter=()=>{
const [count, setCount] = useState(0)

const clickCounter=()=>{
    setCount(count+1);
};
  return (
    <div>
<h3>{count}</h3>
<button onClick={clickCounter}>Click</button>

    </div>
  )
}

export default Counter;
