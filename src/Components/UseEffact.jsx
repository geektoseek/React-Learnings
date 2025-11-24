import React from 'react'
import { useState, useEffect } from 'react'


const UseEffact = () => {

    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log("Working On UseEffact");
        document.title = `Increament${value}`

    })


    return (
        <>
            <h2>{value}</h2>
            <button onClick={() => setValue(value + 1)}>Click Me</button>
        </>
    )
}

export default UseEffact