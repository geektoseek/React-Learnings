import React, { createContext } from 'react';
// import { sata } from './MyContext';
import ComponentTwo from './ComponentTwo';


export const sata = createContext();

const Componentone = () => {
    const name = "zero";

    return (
        <sata.Provider value={name}>
            <ComponentTwo />
        </sata.Provider>
    );
};

export default Componentone;
