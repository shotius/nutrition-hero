import React from 'react'
import Button from '../../shared/components/Button';
import { ImgBackground, MainSectionWrap, PageHeading, ShortDescription } from './Styles';


const MainSection = () => {
    return (
        <MainSectionWrap>
            <PageHeading>
                Captivating Header <br/>goes Here
            </PageHeading>
            <ShortDescription>
            A short description works best
            </ShortDescription>
            <Button type="primary" width="324px">Start now</Button>
        </MainSectionWrap>
    )
}
export default MainSection