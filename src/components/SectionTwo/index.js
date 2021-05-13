import React from 'react'
import Button from '../../shared/components/Button'
import SectionHeader from '../../shared/components/SectionHeader'
import { ExerciseWrap, SectionTwoWrap, TagInfoWrap, TagLinks } from './Styles'
import img from '../../shared/assests/Mail_Image.png'

const SectionTwo = () => {
    return (
        <SectionTwoWrap>
            <ExerciseWrap>
                <SectionHeader size="large" flexPosition="center">
                    Exercise
                </SectionHeader>
                <TagLinks flexPosition="center">
                    <Button type="tagLink" margin="0px 32px" btmLine={{width: '150%;', height: "1px"}}>Home</Button>
                    <Button type="tagLink" margin="0px 32px" btmLine={{width: '150%;', height: "1px"}}>Gym</Button>
                    <Button type="tagLink" margin="0px 32px" btmLine={{width: '150%;', height: "1px"}}>Yoga</Button>
                </TagLinks>
                <TagInfoWrap>
                    {/* <TagPicture src='../../shared/assests/Mail_Image.png' /> */}
                </TagInfoWrap>
            </ExerciseWrap>
        </SectionTwoWrap>
    )
}
export default SectionTwo