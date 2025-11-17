import React from 'react';

const Salam = "Assalamu Alaikum";
const date = new Date();

const Greeting = () => {
    return (
        <>
            <h1>{Salam}</h1>
            <p>Current Date : {date.getDate()}</p>
            <h2>Current Month : {date.getMonth()}</h2>
            <h2>Current Year : {date.getFullYear()}</h2>
        </>
    );
}

export default Greeting;
