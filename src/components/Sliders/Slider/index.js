import React, { useState } from 'react'
import { SliderWrapper, Slide, ButtonLeft, ButtonRight, Carousel, Container} from './Styles'

const Slider = () => {
    const [translate, setTranslate] = useState(-100)
    const [transition, setTransition] = useState()

    const data = ['slide 1', 'slide 2', 'slide 3']

    return ( 
        <Container>
            <Carousel>
                <SliderWrapper>
                    <Slide>{data[data.length-1]}</Slide>
                    {data.map((slide, i) => (
                        <Slide  key={i}>{slide}</Slide>
                    ))}
                        <Slide >{data[0]}</Slide>
                    {/* <ButtonLeft  >left</ButtonLeft>
                    <ButtonRight >right</ButtonRight> */}
                </SliderWrapper>
            </Carousel>
        </Container>
    )
}
export default Slider