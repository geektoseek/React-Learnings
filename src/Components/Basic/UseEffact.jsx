// // import React from 'react'

// // import { useState, useEffect } from 'react'
// // const UseEffact = () => {

// //     const [value, setValue] = useState(0)
// //     useEffect(() => {
// //         console.log("Working On UseEffact");
// //         document.title = `Increament${value}`

// //     })
// //     return (
// //         <>
// //             <h2>{value}</h2>
// //             <button onClick={() => setValue(value + 1)}>Click Me</button>
// //         </>
// //     )
// // }
// // export default UseEffact

// import React, { useEffect } from 'react'
// import { useState } from 'react';

// export const UseEffact = () => {

//     const [data, setData] = useState([]);
//     useEffect(() => {

//         async function getData() {
//             const response = await fetch(
//                 "https://jsonplaceholder.typicode.com/posts"
//             );
//             const data = await response.json();
//             if (data && data.length) setData(data)

//         }

//         getData();
//     }, []);

//     return (
//         <div>
//             <ul>
//                 {data.map(todo => (
//                     <section key={Math.random() }>
//                         <li>{todo.title}</li>
//                         <li>body ----{todo.body}</li>
//                     </section>
//                 ))}
//         </ul>

//         </div >
//     )
// }
// export default UseEffact; 


import React from 'react'
import { useState, useEffect } from 'react'

const UseEffact = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        console.log("Hello World");
        document.title = `Point${data}`;
    },)



    return (
        <>
            <h2 className=''>{data}</h2>
            <button onClick={() => setData(data + 1)}>Update Me</button>
        </>
    )
}

export default UseEffact