import React from 'react'
import SectionHeader from '../../../shared/components/SectionHeader'
import { ImgWrap, SlideWrapper, TextWrap, Img} from './Styles'

const Slide = ({ img, name,  header, text }) => {
    return (
       <SlideWrapper>
           <ImgWrap>
               <Img src={img} />
           </ImgWrap>
           <TextWrap>
                <SectionHeader size="large">
                    {header}
                </SectionHeader>
                <SectionHeader size="medium">
                    {name}
                </SectionHeader>
                {text}
           </TextWrap>
       </SlideWrapper>
    )
}
export default Slide