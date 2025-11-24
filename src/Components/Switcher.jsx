import React, { use, useState } from 'react'

const Switcher = () => {

    const [sw, setSw] = useState(false)

    return (
        <>
            {sw ? <span>Dark</span> : <span>Light</span>}
            <br />
            <input type="text" key={sw ? "dark" : "light"} />
            <button onClick={() => setSw((s) => !s)}>Switch</button>
        </>
    )
}

export default Switcher