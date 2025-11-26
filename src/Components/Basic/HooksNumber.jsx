// import { use, useState } from "react"
import React from "react";
// const HooksNumber = () => {
//     const [movie, setMovie] = useState({
//         title: "Balarina",
//         rating: 9,
//     });
//     const updateRating = () => {
//         const copyMovie = {
//             ...movie,
//             rating: Math.random() * 10,
//         }
//         setMovie(copyMovie)
//     }
//     return (
//         <>
//             <h1>{movie.title}</h1>
//             <h1>{movie.rating}</h1>
//             <button onClick={updateRating}>UpDate Rating</button>
//         </>
//     )
// }
// export default HooksNumber;


import { useState } from "react";

const HooksNumber = () => {
    const [movie, setMovie] = useState([
        { id: 1, title: "Super Man", rating: 95 },
        { id: 2, title: "Spider Man", rating: 65 },
    ]);

    // Add new movies
    const changedMe = () => {
        setMovie([
            ...movie,
            { id: 3, title: "Bat Man", rating: 85 },
            { id: 4, title: "Lucifer", rating: 75 },
        ]);
    };
    const removeDuplicate = () => {
        alert(typeof movie)
    }
    return (
        <>
            <ul>
                {movie.map((m) => (
                    <li key={m.id}>
                        {m.title} — {m.rating}
                    </li>
                ))}
            </ul>
            <button onClick={changedMe}>Add Movies</button>
            <button onClick={removeDuplicate}>Remove Doubled/Duplicate Movie</button>
        </>
    );
};

export default HooksNumber;
