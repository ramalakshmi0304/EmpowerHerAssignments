import React from 'react'

const HeavyComponent = () => {

    console.log("HeavyComponent rendered")
    return (
        <div>
            <h2>HeavyComponent</h2>
            <p>This simulates a heavy UI section.</p>
        </div>
    )
}

export default React.memo(HeavyComponent);