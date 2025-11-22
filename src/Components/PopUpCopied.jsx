import React from 'react'

const PopUpCopied = ({ copied }) => {
    return (
        <>
            {copied && (
                <div className='max-w-max bg-slate-700 rounded-xl text-yellow-200 p-2' >
                    copy to clipboard
                </div >
            )}
        </>
    )
}

export default PopUpCopied