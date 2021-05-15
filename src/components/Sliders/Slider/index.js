import React, { useState } from 'react'
import { SliderContainer, Slide, ButtonLeft, ButtonRight, Container, Carousel} from './Styles'

const Slider = () => {
    const transitionStyle = 'all 0.5s'
    const data = ['slide 1', 'slide 2', 'slide 3']
    const shiftUnit = (-100 / (data.length + 2))
    
    const [transition, setTransition] = useState(transitionStyle)
    const [translate, setTranslate] = useState(shiftUnit)
    const [isSliding, setIsSliding] = useState(false)
    const [direction , setDirection] = useState(-1)

    const goLeft = () => {
        if (!isSliding) {
            console.log('clicked left')
            setDirection(1)
            setIsSliding(true)
            setTransition(transitionStyle)
            setTranslate(translate - shiftUnit )
        }
    }

    const goRight = () => {
        if (!isSliding) {
            setIsSliding(true)
            setTranslate(translate + shiftUnit)
            setTransition(transitionStyle)
        }
        if (translate === (data.length) * (-100)) {
            setTransition("none")
            setTranslate(-100)
        }
    }

    // according to this variable slider is not working 
    // while slide animation is going on 
    const handleStopSliding = () => {
        // if slide happend left and it was the first slide jump to the last slide
        if (direction === 1 && translate === 0){
            setTransition('none')
            setTranslate((data.length) * (shiftUnit))
        }
        setIsSliding(false)
    }

    return (
        <Carousel>
            <SliderContainer 
                translate={translate} 
                transition={transition}
                onTransitionEnd={handleStopSliding}
                >
                    <Slide >{data[data.length-1]}</Slide>
                    {data.map((slide, i) => (
                        <Slide key={i}>{slide}</Slide>
                    ))}
                    <Slide>{data[0]}</Slide>
            </SliderContainer>
           <ButtonLeft  onClick={goLeft}>left</ButtonLeft>
           <ButtonRight onClick={goRight}>right</ButtonRight>
       </Carousel>
    )
}
export default Slider