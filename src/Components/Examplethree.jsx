import React, { useEffect, useState } from 'react'

const Examplethree = () => {
    const [name, setname] = useState(() => {
        const savedName = localStorage.getItem("name");
        return savedName ? JSON.parse(savedName) : "";
    });

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name))
    })

    const handleChange = (event) => {
        setname(event.target.value)
    }

    const handleClear = () => setname("");

    return (
        <>
            <h1>Your Name is : {name}</h1>
            <input type="text" name="name" value={name} onChange={handleChange} placeholder='PLease Enter Your Orignal Name' />
            <button onClick={handleClear}>Clear Name</button>
        </>
    )
}

export default Examplethree