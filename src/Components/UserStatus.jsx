import React from 'react'

const UserStatus = (props) => {
    if (props.isAdmin && props.isLoggedIn) {
        return <h2>Hello Admin</h2>
    }
    else {
        return <h2>Hello User</h2>
    }
}

export default UserStatus;