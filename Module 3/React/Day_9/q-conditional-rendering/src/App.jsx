import React, { useState } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

const App = () => {

  const [status, setStatus] = useState(false);
  const handleToggle = () => {
    setStatus(!status)
  }

  return (
    <div>
      <button onClick={handleToggle}>Toggle Status</button>

      {status ? <ComponentA />: <ComponentB />};

    </div>
  )
}

export default App