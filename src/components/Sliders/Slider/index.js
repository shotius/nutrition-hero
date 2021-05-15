<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { SliderContainer, Slide, ButtonLeft, ButtonRight, Carousel} from './Styles'
import rightArrow from '../../../shared/assests/Group 2350.svg'
import leftArrow from '../../../shared/assests/Group 2416.svg'
=======
import React, { useState } from 'react'
import { SliderContainer, Slide, ButtonLeft, ButtonRight, Container, Carousel} from './Styles'
>>>>>>> parent of a50a4bc... added timing to make slider slide automatically

const Slider = () => {
    const data = ['slide 1', 'slide 2', 'slide 3']

    const transitionStyle = 'all 0.5s'
    const shiftUnit = (-100 / (data.length + 2))
    const sleepTime = 5000
    
    const [transition, setTransition] = useState(transitionStyle)
    const [translate, setTranslate] = useState(shiftUnit)
    const [isSliding, setIsSliding] = useState(false)
    const [direction , setDirection] = useState(-1)
<<<<<<< HEAD
    const [sliderMoves, setSliderMoves] = useState(0)

    // slider timer
    // useEffect(() => {
    //     setTimeout(() => goRight(), sleepTime)
    // }, [sliderMoves])
=======
>>>>>>> parent of a50a4bc... added timing to make slider slide automatically

    const goLeft = () => {
        if (!isSliding) {
            setDirection(1)
            setIsSliding(true)
            setTransition(transitionStyle)
            setTranslate(translate - shiftUnit )
        }
    }

    const goRight = () => {
        if (!isSliding) {
            setDirection(-1)
            setIsSliding(true)
            setTranslate(translate + shiftUnit)
            setTransition(transitionStyle)
        }
    }

    // if slide happend right and it was the last slide jump to the first slide
    // if slide happend left and it was the first slide jump to the last slide
    const onTransitionEnd = () => {
        if (direction === 1 && translate === 0){
            setTransition('none')
            setTranslate((data.length) * (shiftUnit))
        }
        if (direction === -1 && translate === (data.length + 1) * shiftUnit){
            setTransition("none")
            setTranslate(shiftUnit)
        }
        setIsSliding(false)
<<<<<<< HEAD
        setSliderMoves(sliderMoves+1)
=======
>>>>>>> parent of a50a4bc... added timing to make slider slide automatically
    }

    return (
        <Carousel>
            <SliderContainer 
                translate={translate} 
                transition={transition}
                onTransitionEnd={onTransitionEnd}
                >
                    <Slide >{data[data.length-1]}</Slide>
                    {data.map((slide, i) => (
                        <Slide key={i}>{slide}</Slide>
                    ))}
                    <Slide>{data[0]}</Slide>
            </SliderContainer>
<<<<<<< HEAD
           <ButtonLeft  onClick={goLeft}><img src={leftArrow} alt="left"/></ButtonLeft>
           <ButtonRight onClick={goRight}><img src={rightArrow} alt="right"/></ButtonRight>
=======
           <ButtonLeft  onClick={goLeft}>left</ButtonLeft>
           <ButtonRight onClick={goRight}>right</ButtonRight>
>>>>>>> parent of a50a4bc... added timing to make slider slide automatically
       </Carousel>
    )
}
export default Slider