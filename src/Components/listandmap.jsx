// import React from 'react'
// const Listandmap = () => {
//     const userinfo = [
//         {
//             username: "sachin",
//             email: "sachin@gmail.com",
//             locattion: "pune"
//         },
//         {
//             username: "rahul",
//             email: "rahul@gmail.com",
//             locattion: "mumbai"
//         },
//         {
//             username: "rohit",
//             email: "rohit@gmail.com",
//             locattion: "delhi"
//         }
//     ]
//     return (
//         <main>
//             {userinfo.map((user) => (
//                 <ul key={Math.random()}>
//                     <li>{user.username}</li>
//                     <li>{user.email}</li>
//                     <li>{user.locattion}</li>
//                 </ul>
//             ))}

//         </main>
//     )
// }
// export default Listandmap
import React from 'react'
const Listandmap = () => {
    const userinfo = [
        {
            username: "sachin",
            email: "sachin@gmail.com",
            locattion: "pune"
        },
        {
            username: "rahul",
            email: "rahul@gmail.com",
            locattion: "mumbai"
        },
        {
            username: "rohit",
            email: "rohit@gmail.com",
            locattion: "delhi"
        }
    ]
    return (
        <main>
            {userinfo.map(({ username, email, locattion }) => (
                <ul key={Math.random()}>
                    <li>{username}</li>
                    <li>{email}</li>
                    <li>{locattion}</li>
                </ul>
            ))}

        </main>
    )
}
export default Listandmap