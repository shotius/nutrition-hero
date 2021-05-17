import React from 'react'
import { FourthSectionWrap, ImgWrapper, AppStoreWrap } from './Styles'
import { Img, TextWrap } from '../../Styles'
import SectionHeader from '../../shared/components/SectionHeader'
import mobileImg from '../../shared/assests/Mobile App@2x.png'
import appStorImg from '../../shared/assests/download-on-the-app-store-apple-1.svg'
import googlePlayImg from '../../shared/assests/google-play-badge-1.svg'

const ForthSection = () => {
    return (
        <FourthSectionWrap>
            <ImgWrapper>
                <Img src={mobileImg} />
            </ImgWrapper>
            <TextWrap>
                <SectionHeader size="large">
                        New app. New you
                </SectionHeader>
                <SectionHeader size="medium">
                A nutritionalist and personal trainer in your pocket
                </SectionHeader>
                Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem.
                <AppStoreWrap>
                    <img src={appStorImg} style={{marginRight: 16}}/>
                    <img src={googlePlayImg} />
                </AppStoreWrap>
            </TextWrap>
         </FourthSectionWrap>
    )
}
export default ForthSection