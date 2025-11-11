import React from 'react'
const Salam = "Assalamu Alaikum";
const date = new Date();


const Greeting = () => {
    return (
        <>
            <h1>{Salam}</h1>
            <p>Current Date : {date.getDate()}</p>
        </>
    )
}

export default Greeting