import { useState } from "react";
// const HooksFirst = () => {
//     const [count, setCount] = useState(0);
//     const increament = () => setCount(count + 1)
//     const dcreament = () => setCount(count - 3)

//     return (
//         <>
//             <h1>{count}</h1>
//             <div className="">
//                 <button className="border border-red-500 !cursor-not-allowed bg-slate-300 px-8 rounded-lg py-4 text-gray-950 text-3xl" onClick={increament}>+</button>
//                 <button className="border border-red-500 !cursor-not-allowed bg-slate-300 px-8 rounded-lg py-4 text-gray-950 text-3xl ml-4" onClick={dcreament}>-</button>
//             </div>
//         </>
//     )
// }


// export default HooksFirst

const HooksFirst = () => {
    const [friends, setFreinds] = useState(['Alex', 'John'])
    const addMe = () => setFreinds([...friends, 'Zero Web Dev']);
    const removeMe = () => setFreinds(friends.filter((f) => f == "Alex"))
    const upDateme = () => setFreinds(friends.map((f) => (f === "Alex" ? 'Naeem web dev' : f)))




    return (
        <>
            {friends.map(f => (
                <li className="bg-red-300 mt-4 max-w-max ml-4 list-none" key={Math.random()}>{f}</li>
            ))}

            <button onClick={addMe}>Add Me</button>
            <br />
            <button onClick={removeMe}>Remove Alex </button>
            <br />
            <button onClick={upDateme}>UpDate My Name</button>
        </>
    )

}
export default HooksFirst;

