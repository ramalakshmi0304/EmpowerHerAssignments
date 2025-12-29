import React, { Suspense } from 'react'
import HeavyComponent from './HeavyComponent'
import { useState } from 'react'

const App = () => {


const [count,setCount]=useState(0)
console.log("Parent Rendered");


  return (
     <div style={{ padding: "20px" }}>
      <h1>React.Memo & Laxy Loading Demo</h1>
      <h2>Counter</h2>
      <button onClick={()=> setCount(count+1)}>Increment Counter-{count}</button>
      
      <Suspense fallback={<p>Loading Heavy Component....</p>}>
      <HeavyComponent/>
      </Suspense>
      </div>
  );
};

export default App