import { createPortal } from "react-dom";

const PopUpCopied = ({ copied }) => {
    return createPortal(
        <section>
            {copied && (
                <div className='max-w-max bg-slate-700 rounded-xl text-yellow-200 p-2' >
                    copy to clipboard
                </div >
            )}
        </section>,
        document.querySelector("#portal-sec")
    )
};

export default PopUpCopied