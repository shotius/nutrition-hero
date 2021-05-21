import React from 'react'
import { sliderStyle } from '../../../shared/utils/styles'
import { Img, TextWrap} from '../../../Styles'
import { ImgWrap, SlideWrapper, Header, TextHeader} from './Styles'

const Slide = ({ slide, width}) => {
    return (
        <SlideWrapper width={width}>
            <ImgWrap order={slide.align === sliderStyle.pictureRight ? 1 : 0}>
               <Img src={slide.img} />
           </ImgWrap>
           <TextWrap>
                <Header size="large">
                    {slide.header}
                </Header>
                <TextHeader size="medium">
                    {slide.name}
                </TextHeader>
                {slide.text}
           </TextWrap>
       </SlideWrapper>
    )
}
export default React.memo(Slide)

