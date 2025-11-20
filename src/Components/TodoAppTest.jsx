import React, { useState } from 'react'

const TodoAppTest = () => {

    const [todos, setTodos] = useState([]);
    const [inputValues, setInputValues] = useState('');
    const SubmitHandle = e => {
        e.preventDefault()
        if (inputValues.trim()) {
            setTodos([...todos, inputValues]);
            setInputValues('');
        }

    }


    return (
        <>
            <h1>My Today Todo List</h1>
            <form onSubmit={SubmitHandle}>
                <input type="text" value={inputValues} onChange={(e) => setInputValues(e.target.value)} placeholder='Enter Todo' />
                <button type='submit'>Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
        </>
    )
}

export default TodoAppTest