import { useEffect, useState } from "react";

const ToTop = () => {
    const [open, setOpen] = useState(true)
    function activeTop() {
        window.scrollTo(0, 0)
    }
    function scroll() {
        if (window.scrollY === 0) {setOpen(() => false)}
        if (window.scrollY > 0) {setOpen(() => true)}
    }

    useEffect(() => {
        window.addEventListener('scroll', scroll)
        return () => window.removeEventListener('scroll', scroll)
    }, [])

    return <>
        {
            open &&
            <div className="to-top" onClick={activeTop}>&and;</div>
        }

    </>
}

export default ToTop;