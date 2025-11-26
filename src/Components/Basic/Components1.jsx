import React from 'react'

const Components1 = ({ count, onClickHandler }) => {
    const handClick = () => onClickHandler();
    return (
        <>
            <p>{count}</p>
            <button onClick={handClick}>Increment</button>
        </>
    )
}

export default Components1