import React, { useEffect, useState } from 'react'
import Slide from '../Slide'
import { SliderContainer, ButtonLeft, ButtonRight, Carousel, Dots, Dot, Controls} from './Styles'
import rightArrow from '../../../shared/assests/Group 2350.svg'
import leftArrow from '../../../shared/assests/Group 2416.svg'
import { safeCompare, safeOperation } from '../../../shared/utils/functionsForFloats'

// because js have trouble with floating point numbers I created safe operations for it
// and wrapped all float operation 
// slides are aligned [n, 1, 2, 3, 4..., n, 1]
// and when slider goes to the last slide it jumps to the first and wise versa
const Slider = ({data}) => {
    const sleepTime = 5000
    const transitionStyle = 'all 0.5s'
    const shiftUnit = Math.floor((-100 / (data.length + 2)) * 100) / 100
    const precision = -shiftUnit / 2

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
            setTranslate(safeOperation(translate,  shiftUnit, '-'))
        }
    }

    const goRight = () => {
        if (!isSliding) {
            setDirection(-1)
            setIsSliding(true)
            setTranslate(safeOperation(translate, shiftUnit, "+"))
            setTransition(transitionStyle)
        }
    }

    // if slide happend right and it was the last slide jump to the first slide
    // if slide happend left and it was the first slide jump to the last slide
    const onTransitionEnd = () => {
        if (direction === 1 && safeCompare(translate, 0, precision)){
            setTransition('none')
            setTranslate(safeOperation(data.length, shiftUnit, "*"))
        }
        if (direction === -1 && safeCompare(translate, safeOperation(data.length + 1,  shiftUnit, '*'), precision)) {
            setTransition("none")
            setTranslate(shiftUnit)
        }
        setIsSliding(false)
        setSliderMoves(sliderMoves + 1)
    }

    const isActive = (n) => {
        return true
    }

    return (
        <Carousel>
            <SliderContainer 
                translate={translate} 
                transition={transition}
                onTransitionEnd={onTransitionEnd}
                width={data.length + 2}
                >
                    <Slide data={data[data.length - 1]} width={-shiftUnit}></Slide>
                    {data.map((slide, i) => (
                        <Slide data={slide} width={-shiftUnit} key={i}></Slide>
                    ))}
                    <Slide data={data[0]} width={-shiftUnit}></Slide>
           </SliderContainer>
           <Controls>
                <ButtonLeft  onClick={goLeft}><img src={leftArrow} alt="left"/></ButtonLeft>
                <ButtonRight onClick={goRight}><img src={rightArrow} alt="right"/></ButtonRight>
                <Dots>
                    {data.map((slide, i) => (
                        <Dot isActive={() => isActive(i)}></Dot>
                    ))}
                </Dots>
           </Controls>
       </Carousel>
    )
}
export default Slider