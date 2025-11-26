const Card = () => {
    const items = ["Mouse", "Laptop", "Earbuds", "Keyboard", "Charger"];

    return <div>
        {/* {items.length > 0 && <h2>{items.length} items in cart</h2>} */}
        {
            items.map(item => (
                <li key={Math.random()}>{item}</li>
            ))
        }

    </div>
};

const Cart = () => {
    return (
        <div>
            <Card />
        </div>
    );
}
export default Cart;