import React, { useState } from 'react'

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [name, setNames] = useState('');
    const [quantity, setQuantity] = useState('');



    return (
        <div>
            <h1>Here is my Shopping List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Item Name' value={name} onChange={(e) => setNames(e.target.value)} />
            </form>
        </div>
    )
}

export default ShoppingList