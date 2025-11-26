import React, { useState } from 'react'

const TodoApp = () => {

    const [todos, setTodos] = useState([]);
    const [inputValues, setInputValues] = useState('');
    const handleSubmit = e => {
        e.preventDefault()
        if (inputValues.trim()) {
            setTodos([...todos, inputValues])
            setInputValues('');
        }
    }
    const handlechange = e => {
        setInputValues(e.target.value)
    }


    return (
        <>
            <h1>Todos List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValues} onChange={handlechange} placeholder='Add New Todo' />
                <button type='submit'>Add Todo</button>
            </form >

            <ul>
                {todos.map((todo, index) => {

                    return <li key={index}>{todo}</li>
                })}
            </ul>
        </>
    )
}

export default TodoApp