import React from 'react'
import SectionHeader from '../../../shared/components/SectionHeader'
import { ImgWrap, SlideWrapper, TextWrap, Img} from './Styles'


const Slide = ({ slide, width}) => {
    return (
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
}
export default React.memo(Slide)

