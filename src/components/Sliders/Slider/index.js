import React from 'react'
import SectionHeader from '../../../shared/components/SectionHeader'
import { ImgWrap, SliderWrapper, TextWrap, Img} from './Styles'

const Slider = ({ img, name,  header, text }) => {
    return (
       <SliderWrapper>
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
       </SliderWrapper>
    )
}
export default Slider