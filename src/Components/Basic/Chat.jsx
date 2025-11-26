import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

import "../index.css"

const Chat = (props) => {

    return props.timeOfDay === "morning" ? (<h1>Good Morning <FaPlayCircle /></h1>) : (<h1>Good Afternoon <FaPlayCircle /></h1>);
}

export default Chat