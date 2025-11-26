import React from 'react';
import { sata } from './Componentone';

const ComponentTwo = () => {
    return (
        <sata.Consumer>
            {(name) => <h2>Hello My Name is {name}</h2>}
        </sata.Consumer>
    );
};

export default ComponentTwo;
