import React from 'react'
const userList = [
    {
        names: "Alice",
        age: "22",
        location: "New York"
    },
    {
        names: "Bob",
        age: "25",
        location: "California"
    },
    {
        names: "Charlie",
        age: "30",
        location: "Texas"
    },
    {
        names: "David",
        age: "28",
        location: "Florida"
    }
];

const Userlist = () => {


    return (
        <div>
            {userList.map((users) => {
                return (

                    <ul key={Math.random()}>
                        <li>{users.names}</li>
                        <li>{users.age}</li>
                        <li>{users.location}</li>
                    </ul>

                )
            })}

        </div>
    )
}

export default Userlist;