import React from 'react'

const ProductProps = (props) => {
    return (
        <>
            <h2>My Laptop is : {props.productName}</h2>
            <h2>My Laptop price is : ${props.Productprice}</h2>
        </>
    )
}


export default ProductProps