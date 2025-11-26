import React from 'react'

const Person = () => {
    return <Namee nameIs="HUzan WebDev" ageIs={22} />
}

const Namee = (props) => {
    return (
        <>
            <h1>User Name is : {props.nameIs}</h1>
            <h1>User Age is : {props.ageIs}</h1>
        </>
    )
}
export default Person
