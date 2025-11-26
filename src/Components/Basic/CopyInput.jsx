import React, { useState } from 'react'
import PopUpCopied from './PopUpCopied';

const CopyInput = () => {

    const [inputvalue, setInputValue] = useState('')
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(inputvalue).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 8000)
        })

    }

    return (
        <>
            <h1>Hello World</h1>
            <input type="text" value={inputvalue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={handleCopy}>Copy</button>
            <PopUpCopied copied={copied} />
        </>
    )
}

export default CopyInput