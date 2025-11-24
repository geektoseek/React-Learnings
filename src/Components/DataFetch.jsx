import React from 'react'
import { useState, useEffect } from 'react'

const DataFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            if (data && data.length) setData(data)
        };

        getData();
    }, [])



    return (
        <>
            <ul>
                {data.map(todo => (
                    <section key={Math.random()}>
                        <li>{todo.id}</li>
                        <li>{todo.title}</li>
                        <li>{todo.body}</li>
                    </section>
                ))}
            </ul>


        </>
    )
}

export default DataFetch