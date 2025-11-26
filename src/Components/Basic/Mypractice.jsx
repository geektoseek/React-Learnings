const copyHandler = () => {
    const mock = document.getElementById("pope");
    console.log("Hello World");

    mock.innerText = "Hello world"

};


const Mypractice = () => {
    return (
        <>
            <p onCopy={copyHandler} id="pope">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi harum illo at repellat unde incidunt ex. Dolore nostrum impedit cupiditate.</p>
        </>
    )
}


export default Mypractice;

