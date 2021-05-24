import { useEffect, useState } from "react";

export function useScroll() {
    const [bodyOffset, setBodyOffset] = useState(
        document.body.getBoundingClientRect()
    )
    const [scrollY, setScrollY] = useState(bodyOffset.top)

    const listener = (e) => {
        const rect = document.body.getBoundingClientRect()
        setBodyOffset(rect)
        setScrollY(-rect.top)
    }

    useEffect(() => {
        window.addEventListener('scroll', listener) 
        return () => {
            window.removeEventListener('scroll', listener)
        }
    }, [])

    return scrollY
}