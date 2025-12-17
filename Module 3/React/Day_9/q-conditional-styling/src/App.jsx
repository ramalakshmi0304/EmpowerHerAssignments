
import { useState } from 'react';

const App = () => {

  const [isRed, setIsRed] = useState(true);

const toggleColor= () =>{
  setIsRed(!isRed);
}

  return (

    <>
      <div style={{
        color: isRed ? "red" : "blue",
        fontSize: "24px", marginBottom: "10px"
      }}
      > This is a text change color
      </div>
      <button onClick={toggleColor}> Toggle Color</button>

    </>
  )
}

export default App