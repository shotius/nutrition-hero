import React, { useEffect, useState } from 'react'
import Slide from './Slide'
import { SliderContainer, ButtonLeft, ButtonRight, Carousel} from './Styles'
import rightArrow from '../../../shared/assests/Group 2350.svg'
import leftArrow from '../../../shared/assests/Group 2416.svg'

const Slider = () => {
    // we can enter slides
    const data = ['slide 1', 'slide 2', 'slide 3']

    const transitionStyle = 'all 0.5s'
    const sleepTime = 5000
    const shiftUnit = Math.floor((-100 / (data.length + 2)) * 100) / 100

    // console.log(shiftUnit, "shft")
    

    const [transition, setTransition] = useState(transitionStyle)
    const [translate, setTranslate] = useState(shiftUnit)
    const [isSliding, setIsSliding] = useState(false)
    const [direction , setDirection] = useState(-1)
    const [sliderMoves, setSliderMoves] = useState(0)

    // slider timer
    // useEffect(() => {
    //     setTimeout(() => goRight(), sleepTime)
    // }, [sliderMoves])

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
        console.log(translate, 'translate')
        console.log(shiftUnit, 'shift')
        if (direction === 1 && translate === 0){
            setTransition('none')
            setTranslate((data.length) * (shiftUnit))
        }
        if (direction === -1 && translate === (data.length + 1) * shiftUnit){
            setTransition("none")
            setTranslate(shiftUnit)
        }
        setIsSliding(false)
        setSliderMoves(sliderMoves+1)
    }

    // const saveOperation = (a, b, operator ) => {
    //     switch(operator) 
    // }
    return (
        <Carousel>
            <SliderContainer 
                translate={translate} 
                transition={transition}
                onTransitionEnd={onTransitionEnd}
                width={data.length + 2}
                >
                    <Slide data={data[data.length-1]} width={-shiftUnit}></Slide>
                    {data.map((slide, i) => (
                        <Slide data={slide} width={-shiftUnit} key={i}></Slide>
                    ))}
                    <Slide data={data[0]} width={-shiftUnit}></Slide>
            </SliderContainer>
           <ButtonLeft  onClick={goLeft}><img src={leftArrow} alt="left"/></ButtonLeft>
           <ButtonRight onClick={goRight}><img src={rightArrow} alt="right"/></ButtonRight>
       </Carousel>
    )
}
export default Slider