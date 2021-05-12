import React from 'react'
import { ImgBackground, MainHeadingWrap, PageHeading } from './Styles';


const MainHeading = () => {
    return (
        <>
            <MainHeadingWrap>
                <ImgBackground />
                <PageHeading>
                    Captivating Header goes Here
                </PageHeading>
            </MainHeadingWrap>
        </>
    )
}
export default MainHeading