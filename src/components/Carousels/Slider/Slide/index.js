import React from 'react'
// import SectionHeader from '../../../shared/components/SectionHeader'
import { ImgWrap, SlideWrapper, TextWrap, Img} from './Styles'

const Slide = ({ img, name,  header, text, data, width}) => {
    return (
       <SlideWrapper width={width}>
         {data}
       </SlideWrapper>
    )
}
export default Slide


// <ImgWrap>
//                <Img src={img} />
//            </ImgWrap>
//            <TextWrap>
//                 <SectionHeader size="large">
//                     {header}
//                 </SectionHeader>
//                 <SectionHeader size="medium">
//                     {name}
//                 </SectionHeader>
//                 {text}
//            </TextWrap>