import React from 'react'
import { data } from './Componentone'

const ComponentTwo = () => {
    return (
        <data.Consumer>
            {(lolo) => {
                <h2>{lolo}</h2>
            }}
        </data.Consumer>
    )
}

export default ComponentTwo