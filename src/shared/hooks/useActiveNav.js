import { useState, useEffect } from "react"
import { useScroll } from "./useScroll"

export function useActiveNav(refs) {
    const [isExerciseActive,setIsExerciseActive] = useState(false)
    const [isNutritionActive, setIsNutritionActive] = useState(false)
    const [isExpertiesActive, setIsExpertiesActive] = useState(false)
    const [isAppActive, setIsAppActive] = useState(false)

    const scrollY = useScroll()

    const {exerciseRef, appRef} = refs
    
    useEffect(() => {
        const exerciseOffset = refs.exerciseRef.current.getBoundingClientRect();
        const nutritionOffset = refs.nutritionRef.current.getBoundingClientRect();
        const expertiesOffset = refs.expertiesRef.current.getBoundingClientRect();
        const appOffset = refs.appRef.current.getBoundingClientRect();


        if (exerciseOffset.top < 80 && exerciseOffset.top > 30) {
                setIsExerciseActive(true)
                setIsNutritionActive(false)
                setIsExpertiesActive(false)
                setIsAppActive(false)
            }
        if (nutritionOffset.top < 80 && nutritionOffset.top > 30) {
            setIsNutritionActive(true)
            setIsExerciseActive(false)
            setIsExpertiesActive(false)
            setIsAppActive(false)
        }
        if (expertiesOffset.top < 80 && expertiesOffset.top > 30) {
            setIsExpertiesActive(true)
            setIsExerciseActive(false)
            setIsNutritionActive(false)
            setIsAppActive(false)
        }
        if (appOffset.top < 80 && appOffset.top > 30) {
            setIsAppActive(true)
            setIsExerciseActive(false)
            setIsNutritionActive(false)
            setIsExpertiesActive(false)
        }
    }, [scrollY])

    return {
        isExerciseActive,
        isNutritionActive,
        isExpertiesActive,
        isAppActive,
    }
}