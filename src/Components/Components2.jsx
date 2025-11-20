import React from 'react'

const Components2 = ({ count, onclickDecrement }) => {
    const clickHandler = () => onclickDecrement();
    return (
        <div>
            <p>{count}</p>
            <button onClick={clickHandler}>Decrement</button>
        </div>
    )
}

export default Components2