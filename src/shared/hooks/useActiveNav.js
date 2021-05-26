import { useState, useEffect } from "react";
import { useScroll } from "./useScroll";

export function useActiveNav(refs) {
  const [isExerciseActive, setIsExerciseActive] = useState(false);
  const [isNutritionActive, setIsNutritionActive] = useState(false);
  const [isExpertiesActive, setIsExpertiesActive] = useState(false);
  const [isAppActive, setIsAppActive] = useState(false);

  const scrollY = useScroll();

  const top = 100;
  const bottom = -50;

  useEffect(() => {
    const exerciseOffset = refs.exerciseRef.current.getBoundingClientRect();
    const nutritionOffset = refs.nutritionRef.current.getBoundingClientRect();
    const expertiesOffset = refs.expertiesRef.current.getBoundingClientRect();
    const appOffset = refs.appRef.current.getBoundingClientRect();

    if (exerciseOffset.top < top && exerciseOffset.top > bottom) {
      setIsExerciseActive(true);
      setIsNutritionActive(false);
      setIsExpertiesActive(false);
      setIsAppActive(false);
    }
    if (nutritionOffset.top < top && nutritionOffset.top > bottom) {
      setIsNutritionActive(true);
      setIsExerciseActive(false);
      setIsExpertiesActive(false);
      setIsAppActive(false);
    }
    if (expertiesOffset.top < top && expertiesOffset.top > bottom) {
      setIsExpertiesActive(true);
      setIsExerciseActive(false);
      setIsNutritionActive(false);
      setIsAppActive(false);
    }
    if (appOffset.top < top && appOffset.top > bottom) {
      setIsAppActive(true);
      setIsExerciseActive(false);
      setIsNutritionActive(false);
      setIsExpertiesActive(false);
    }
  }, [scrollY]);

  return {
    isExerciseActive,
    isNutritionActive,
    isExpertiesActive,
    isAppActive,
  };
}
