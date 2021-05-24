import { useEffect, useState } from "react";

export function useScroll() {
    const [scrollY, setScrollY] = useState(0)
    const [isExerciseActive, setIsExerciseActive] = useState(false)
    const [isNutritionActive, setIsNutritionActive] = useState(false)
    const [isEpertiesActive, setIsEpertiesAcitve] = useState(false)
    const [isAppActive, setIsAppActive] = useState(false)

    const listener = (e) => {
        const rect = document.body.getBoundingClientRect()
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