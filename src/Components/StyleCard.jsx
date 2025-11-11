import React from 'react'
import { FaBeer } from "react-icons/fa";



const StyleCard = () => {
    const style = {
        backgroundColor: " Gray",
        padding: "20px",
        borderRadius: "8px",
        color: "#000"

    }
    return (
        <div>
            {/* <h1 style={{ backgroundColor: 'lightblue', color: "#000", padding: '20px', border: '1px solid red', borderRadius: '40px' }}>
                Hello, Tailwind!
            </h1> */}
            <div style={style}>
                <FaBeer />
                <FaBeer size={40} color='golden' />

                <h2>Hello Users</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis est modi sunt provident nobis enim sequi laborum, </p>
                <button>Click Me</button>
            </div>
        </div>
    )
}

export default StyleCard