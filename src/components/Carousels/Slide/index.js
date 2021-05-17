import React from 'react'
import SectionHeader from '../../../shared/components/SectionHeader'
import { sliderStyle } from '../../../shared/utils/styles'
import { ImgWrap, SlideWrapper, TextWrap, Img} from './Styles'


const Slide = ({ slide, width}) => {
    const PictureRight = () => (
        <SlideWrapper width={width}>
            <TextWrap>
                <SectionHeader size="large">
                    {slide.header}
                    {/* header */}
                </SectionHeader>
                <SectionHeader size="medium">
                    {slide.name}
                </SectionHeader>
                {slide.text}
            </TextWrap>
            <ImgWrap>
                <Img src={slide.img} />
            </ImgWrap>
        </SlideWrapper>
    )
    
    const PictureLeft = () => (
        <SlideWrapper width={width}>
            <ImgWrap>
               <Img src={slide.img} />
           </ImgWrap>
           <TextWrap>
                <SectionHeader size="large">
                    {slide.header}
                    {/* header */}
                </SectionHeader>
                <SectionHeader size="medium">
                    {slide.name}
                </SectionHeader>
                {slide.text}
           </TextWrap>
       </SlideWrapper>
    )
    return slide.align === sliderStyle.pictureLeft ? <PictureLeft /> : <PictureRight />
}
export default React.memo(Slide)

