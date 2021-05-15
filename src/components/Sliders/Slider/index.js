import React, { useState } from 'react'
import { SliderWrapper, Slide, ButtonLeft, ButtonRight} from './Styles'

const Slider = () => {
    const data = ['slide 1', 'slide 2', 'slide 3', 'slide 4', 'slide 5']
    const animationTime = 'all 0.5s'
    const [translate, setTranslate] = useState(0)
    const [transition, setTransition] = useState(animationTime)

    const goLeft = () => {
        setTransition(animationTime)
        setTranslate(translate + 100 )
        if (translate === -100)
        {
            setTimeout(() => {
                setTranslate((data.length) * (-100))
                setTransition('none')
            }, 500)
        }
    }
    // console.log("translate", translate, 'data', data)
    const goRight = () => {
        setTranslate(translate - 100)
        setTransition(animationTime)
        if (translate === (data.length) * (-100)) {
            setTimeout(() => {
                setTransition("none")
                setTranslate(-100)
            }, 500)
        }
    }

    return (
       <SliderWrapper>
           <Slide translate={translate} transition={transition}>{data[data.length-1]}</Slide>
           {data.map((slide, i) => (
               <Slide translate={translate} transition={transition} key={i}>{slide}</Slide>
           ))}
            <Slide translate={translate} transition={transition}>{data[0]}</Slide>
           <ButtonLeft  onClick={goLeft}>left</ButtonLeft>
           <ButtonRight onClick={goRight}>right</ButtonRight>
       </SliderWrapper>
    )
}
export default Slider