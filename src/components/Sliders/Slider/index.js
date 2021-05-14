import React, { useState } from 'react'
import { SliderWrapper, Slide, ButtonLeft, ButtonRight} from './Styles'

const Slider = () => {
    const data = ['slide 1', 'slide 2', 'slide 3', 'slide 4', 'slide 5']
    const [translate, setTranslate] = useState(0)

    const goLeft = () => {
        
        setTranslate(translate + 100)
    }
    const goRight = () => setTranslate(translate - 100)

    return (
       <SliderWrapper>
            <Slide>{data[0]}</Slide>
           {data.map((slide, i) => (
               <Slide translate={translate} key={i}>{slide}</Slide>
           ))}
           <Slide>{data[data.length-1]}</Slide>
           <ButtonLeft  onClick={goLeft}>left</ButtonLeft>
           <ButtonRight onClick={goRight}>right</ButtonRight>
       </SliderWrapper>
    )
}
export default Slider