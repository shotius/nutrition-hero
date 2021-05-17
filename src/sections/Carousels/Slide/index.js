import React from 'react'
import SectionHeader from '../../../shared/components/SectionHeader'
import { sliderStyle } from '../../../shared/utils/styles'
import { Img, TextWrap} from '../../../Styles'
import { ImgWrap, SlideWrapper} from './Styles'

const Slide = ({ slide, width}) => {
    return (
        <SlideWrapper width={width}>
            <ImgWrap order={slide.align === sliderStyle.pictureRight ? 1 : 0}>
               <Img src={slide.img} />
           </ImgWrap>
           <TextWrap>
                <SectionHeader size="large">
                    {slide.header}
                </SectionHeader>
                <SectionHeader size="medium">
                    {slide.name}
                </SectionHeader>
                {slide.text}
           </TextWrap>
       </SlideWrapper>
    )
}
export default React.memo(Slide)

