import React, { useState } from 'react'

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [name, setNames] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = e => {
        e.preventDefault()

        if (!name || !quantity) return;

        const newItem = {
            name,
            quantity: parseInt(quantity)
        };
        setItems((prevItems) => [...prevItems, newItem])
        setNames("");
        setQuantity("");
    }


    return (
        <div>
            <h1>Here is my Shopping List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Item Name' value={name} onChange={(e) => setNames(e.target.value)} />
                <input type="number" placeholder='Enter items Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <button type='submit'>Add To Cart</button>
            </form>


            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - Quantity :{item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList