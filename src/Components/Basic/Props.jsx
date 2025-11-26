function Propss() {
    return <Users name="Zero" age={22} isMarried={false} hobbies={['Coding', 'Reading', 'Sleeping']} />
}

const Users = (props) => {
    return (
        <>
            <h1>Name is : {props.name}</h1>
            <h1>Name is : {props.age}</h1>
            <h1>Status is : {props.isMarried}</h1>
            <p>Hobbies is : {props.hobbies}</p>
        </>
    )
}


export default Propss;