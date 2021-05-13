import React from 'react'
import Button from '../../shared/components/Button';
import { ImgBackground, MainHeadingWrap, PageHeading, ShortDescription } from './Styles';


const MainSection = () => {
    return (
        <>
            <MainHeadingWrap>
                <ImgBackground />
                <PageHeading>
                    Captivating Header goes Here
                </PageHeading>
                <ShortDescription>
                A short description works best
                </ShortDescription>
                <Button variant="primary" width="324px">Start now</Button>
            </MainHeadingWrap>
        </>
    )
}
export default MainSection