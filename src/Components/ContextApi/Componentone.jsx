import { createContext } from 'react'
import React from 'react'

export const data = createContext();

const Componentone = () => {
    return (
        <data.Provider value={lolo}>
            <h1>zero</h1>
        </data.Provider>
    )
}

export default Componentone;