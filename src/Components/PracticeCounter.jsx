import React, { useState } from 'react'

const PracticeCounter = () => {
    const [count, setCounter] = useState(0);
    const clickHandler = () => setCounter(count + 1);
    return (
        <>
            <p>{count}</p>
            <button onClick={clickHandler} >Click Me</button>
        </>
    )
}

export default PracticeCounter