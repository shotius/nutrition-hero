import React from 'react'
import {  MainSectionWrap, PageHeading, ShortDescription, SignUpBtn } from './Styles';


const MainSection = () => {
    return (
        <MainSectionWrap>
            <PageHeading>
                Captivating Header <br/>goes Here
            </PageHeading>
            <ShortDescription>
               A short description works best
            </ShortDescription>
            <SignUpBtn type="primary">Start now</SignUpBtn>
        </MainSectionWrap>
    )
}
export default MainSection