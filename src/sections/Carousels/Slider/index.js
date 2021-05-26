import React, { useEffect, useState } from "react";
import Slide from "../Slide";
import {
  SliderContainer,
  ButtonLeft,
  ButtonRight,
  Carousel,
  Dots,
  Dot,
  Controls,
} from "./Styles";
import rightArrow from "../../../shared/assests/Group 2350.svg";
import leftArrow from "../../../shared/assests/Group 2416.svg";
import {
  safeCompare,
  safeOperation,
} from "../../../shared/utils/functionsForFloats";
import { useSwipeable } from "react-swipeable";

// because js have trouble with floating point numbers I created safe operations for it
// and wrapped all float operation
// slides are aligned [n, 1, 2, 3, 4..., n, 1]
// and when slider goes to the last slide it jumps to the first and wise versa
const Slider = ({ slides }) => {
  const sleepTime = 3000;
  const transitionStyle = "all 0.5s";
  const shiftUnit = Math.floor((-100 / (slides.length + 2)) * 100) / 100;
  const precision = -shiftUnit / 2;

  const [transition, setTransition] = useState(transitionStyle);
  const [translate, setTranslate] = useState(shiftUnit);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState(-1);
  const [sliderMoves, setSliderMoves] = useState(0);

  // // slider timer
  // useEffect(() => {
  //     const timer = setTimeout(() => goRight(), sleepTime)
  //     return () => clearTimeout(timer)
  // }, [sliderMoves])

  const goLeft = () => {
    if (!isSliding) {
      setDirection(1);
      setIsSliding(true);
      setTransition(transitionStyle);
      setTranslate(safeOperation(translate, shiftUnit, "-"));
    }
  };

  const goRight = () => {
    if (!isSliding) {
      setDirection(-1);
      setIsSliding(true);
      setTranslate(safeOperation(translate, shiftUnit, "+"));
      setTransition(transitionStyle);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: goRight,
    onSwipedRight: goLeft,
  });

  // if slide happend right and it was the last slide jump to the first slide
  // if slide happend left and it was the first slide jump to the last slide
  const onTransitionEnd = () => {
    if (direction === 1 && safeCompare(translate, 0, precision)) {
      setTransition("none");
      setTranslate(safeOperation(slides.length, shiftUnit, "*"));
    }
    if (
      direction === -1 &&
      safeCompare(
        translate,
        safeOperation(slides.length + 1, shiftUnit, "*"),
        precision
      )
    ) {
      setTransition("none");
      setTranslate(shiftUnit);
    }
    setIsSliding(false);
    setSliderMoves(sliderMoves + 1);
  };

  // this function returns true or false
  // checking how many shift were made, if slide received in the argument is equal to
  // actual slide were is slider in the moment - true, else - false
  const isActive = (i) => {
    const nShift = safeOperation(translate, shiftUnit, "/");
    let activeSlide;

    if (nShift > slides.length) {
      activeSlide = 1;
    } else if (nShift < 1) {
      activeSlide = slides.length;
    } else {
      activeSlide = nShift;
    }
    return activeSlide === i;
  };

  const goToSlide = (slide) => {
    setTransition(transitionStyle);
    setSliderMoves(sliderMoves + 1);
    setTranslate(slide * shiftUnit);
  };

  return (
    <Carousel>
      <SliderContainer
        translate={translate}
        transition={transition}
        onTransitionEnd={onTransitionEnd}
        width={slides.length + 2}
        {...handlers}
      >
        <Slide slide={slides[slides.length - 1]} width={-shiftUnit}></Slide>
        {slides.map((slide, i) => (
          <Slide slide={slide} width={-shiftUnit} key={i}></Slide>
        ))}
        <Slide slide={slides[0]} width={-shiftUnit}></Slide>
      </SliderContainer>
      <Controls>
        <ButtonLeft onClick={goLeft}>
          <img src={leftArrow} alt="left" />
        </ButtonLeft>
        <ButtonRight onClick={goRight}>
          <img src={rightArrow} alt="right" />
        </ButtonRight>
        <Dots>
          {slides.map((slide, i) => {
            // we pass i+1 becase first slide is actualy on the second position
            const active = isActive(i + 1);
            return (
              <Dot key={i} isActive={active} onClick={() => goToSlide(i + 1)} />
            );
          })}
        </Dots>
      </Controls>
    </Carousel>
  );
};
export default Slider;
