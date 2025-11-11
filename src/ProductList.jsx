import React from 'react'
const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 699.99 },
    { id: 3, name: 'Tablet', price: 399.99 },
]
function ProductList() {

    return (
        <main>
            {products.map((ids) => (
                <div key={Math.random()}>
                    <h2>{ids.name}</h2>
                    <p>Price: ${ids.price}</p>
                </div>
            ))}
        </main>
    )
}

export default ProductList