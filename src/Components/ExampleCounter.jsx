import React, { useState } from 'react'

const ExampleCounter = () => {
    const [randomnumber, setrandomenumbers] = useState(() => Math.floor(Math.random() * 100));

    const generateRandomNumber = () => {
        const newNumber = Math.floor(Math.random() * 100)
        setrandomenumbers(newNumber)
    }
    return (
        <div>
            <h2> pick Any Number : {randomnumber}</h2>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
        </div>
    )
}

export default ExampleCounter