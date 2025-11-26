const ProductInfo = () => {
    const Product = {
        names: "laptop",
        price: "$1200",
        description: "A high-performance laptop suitable for all your computing needs.",
        availability: "In Stock"
    }
    return (
        <>
            <h2 className="productOne">Name : {Product.names}</h2>
            <h5>Price : {Product.price}</h5>
            <p>Description : {Product.description}</p>
            <p>Availability : {Product.availability}</p>
        </>

    )
}
export default ProductInfo;