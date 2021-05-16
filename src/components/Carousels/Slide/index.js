import React from 'react'
import SectionHeader from '../../../shared/components/SectionHeader'
import { ImgWrap, SlideWrapper, TextWrap, Img} from './Styles'


const Slide = ({ data, width}) => {
    console.log('data in slide', data)
    return (
       <SlideWrapper width={width}>
            <ImgWrap>
               <Img src={data.img} />
           </ImgWrap>
           <TextWrap>
                <SectionHeader size="large">
                    {data.header}
                    {/* header */}
                </SectionHeader>
                <SectionHeader size="medium">
                    {data.name}
                </SectionHeader>
                {data.text}
           </TextWrap>
       </SlideWrapper>
    )
}
export default React.memo(Slide)

