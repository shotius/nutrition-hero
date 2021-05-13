import React from 'react'
import Button from '../../shared/components/Button'
import SectionHeader from '../../shared/components/SectionHeader'
import { ExerciseWrap, SectionTwoWrap, TagInfoWrap, TagLinks, TagPicture, TextWrap } from './Styles'
import img from '/home/shoutius/sweeft_digital/workout/nutrition-react/src/shared/assests/Mail_Image.png'

const SectionTwo = () => {
    return (
        <SectionTwoWrap>
            <ExerciseWrap>
                <SectionHeader size="large" flexPosition="center">
                    Exercise
                </SectionHeader>
                <TagLinks flexPosition="center">
                    <Button type="tagLink" margin="0px 32px" btmLine={{width: '160%;', height: "1px"}}>Home</Button>
                    <Button type="tagLink" margin="0px 32px" btmLine={{width: '160%;', height: "1px"}}>Gym</Button>
                    <Button type="tagLink" margin="0px 32px" btmLine={{width: '160%;', height: "1px"}}>Yoga</Button>
                </TagLinks>
                <TagInfoWrap>
                    <TagPicture src='../../shared/assests/Mail_Image.png' />
                    <TextWrap>
                        <SectionHeader size="medium">
                        A short title works
                        </SectionHeader> 
                        best At home to gym, crossfit to pilates, yoga to bodyweight, as well as healthy and easy to make breakfasts, lunches, dinners and snacks. We want to make sure you enjoy the journey for a healthy lifestyle.
                    </TextWrap>
                </TagInfoWrap>
            </ExerciseWrap>
        </SectionTwoWrap>
    )
}
export default SectionTwo