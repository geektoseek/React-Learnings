import React, { useState } from 'react'

const Profile = () => {

    const [user, setUser] = useState({
        names: '',
        age: '',
    })

    const handleChange = e => {
        const { name, value } = e.target;

        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    };
    return (
        <>
            <h1>User Profile</h1>
            <div>
                <label>Name :
                    <input
                        type="text"
                        name="names"
                        value={user.names}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>Age :
                    <input
                        type="number"
                        name="age"
                        value={user.age}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <h3>Profile INformation</h3>
            <h4>Name : {user.names}</h4>
            <h4>Age : {user.age}</h4>
        </>
    )
}

export default Profile