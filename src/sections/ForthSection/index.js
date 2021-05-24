import React from 'react'
import { FourthSectionWrap, ImgWrapper, AppStoreWrap } from './Styles'
import { Img, TextWrap } from '../../Styles'
import SectionHeader from '../../shared/components/SectionHeader'
import tabletImg from '../../shared/assests/Mobile App@2x.png'
import appStorImg from '../../shared/assests/download-on-the-app-store-apple-1.svg'
import googlePlayImg from '../../shared/assests/google-play-badge-1.svg'

const ForthSection = () => {
    return (
        <FourthSectionWrap>
            <ImgWrapper>
                <Img src={tabletImg} />
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
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" style={{cursor: "pointer"}}><img src={appStorImg} style={{marginRight: 16}} alt='app store link'/></a>
                    <a href="https://play.google.com/store/apps" target="_blank" rel="noreferrer" style={{cursor: "pointer"}}><img src={googlePlayImg} alt='googlePlayLInke'/></a>
                </AppStoreWrap>
            </TextWrap>
         </FourthSectionWrap>
    )
}
export default ForthSection