import React, { useState } from 'react'
import { SliderWrapper, Slide, ButtonLeft, ButtonRight, Carousel} from './Styles'

const Slider = () => {
    const [translate, setTranslate] = useState(0)
    const [transition, setTransition] = useState()
    const [direction, setDirection] = useState(-1)

    const data = ['slide 1', 'slide 2', 'slide 3', 'slide 4', 'slide 5']

    const goLeft = () => {
        setDirection(1)
        setTransition(null)
        setTranslate(translate + 100 )
    }

    const goRight = () => {
        setDirection(-1)
        setTransition(null)
        setTranslate(translate - 100)
    }

    const handleRotate = () => {
        if ( direction === -1 && translate === (data.length + 1) * (-100)) {
                setTransition("none")
                setTranslate(-100)
        }
        if (direction === 1 && translate === 0)
        {
                setTranslate((data.length) * (-100))
                setTransition('none')
        }
    }

    return (
        <Carousel>
            <SliderWrapper>
                <Slide translate={translate} transition={transition} onTransitionEnd={handleRotate}>{data[data.length-1]}</Slide>
                {data.map((slide, i) => (
                    <Slide translate={translate} onTransitionEnd={handleRotate} transition={transition} key={i}>{slide}</Slide>
                ))}
                    <Slide translate={translate} transition={transition} onTransitionEnd={handleRotate}>{data[0]}</Slide>
                <ButtonLeft  onClick={goLeft}>left</ButtonLeft>
                <ButtonRight onClick={goRight}>right</ButtonRight>
            </SliderWrapper>
        </Carousel>
    )
}
export default Slider