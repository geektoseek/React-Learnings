const Rules = () => {
    const myName = "Naeem Aslam";
    const multiplay = (a, b) => {
        return a * b;
    };
    return (
        <>
            <p> 2 + 2 = {2 + 2} </p>
            <h1> {myName} </h1>
            <h2> Hello World </h2>
            <p>My Freind list is : {["john", "Robin", "Bheen", "Doe"]}</p>
            <h3>10 * 3 = {multiplay(10, 3)}</h3>
        </>
    )
}
export default Rules;