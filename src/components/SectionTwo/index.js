import React from 'react'
import Button from '../../shared/components/Button'
import SectionHeader from '../../shared/components/SectionHeader'
import { colors, font } from '../../shared/utils/styles'
import { Wrapper } from '../../Styles'
import { ExerciseWrap, NutritionWrap, SectionTwoWrap, TagInfoWrap, TagLinks, TagPicture, TextWrap, ImageWrapper } from './Styles'
import workout_1 from '../../shared/assests/Mail_Image.png'
import food_1 from '../../shared/assests/Rectangle 1473.png'


const SectionTwo = () => {
    return (
        <SectionTwoWrap>
            <Wrapper>
                <ExerciseWrap>
                    <SectionHeader size="large" flexPosition="center">
                        Exercise
                    </SectionHeader>
                    <TagLinks flexPosition="center">
                        <Button type="tagLink" color="Grey" onhover="black" btmLine={{width: '160%;', height: "1px"}}>Home</Button>
                        <Button type="tagLink" color="Grey" onhover="black" btmLine={{width: '160%;', height: "1px"}}>Gym</Button>
                        <Button type="tagLink" color="Grey" onhover="black" btmLine={{width: '160%;', height: "1px"}}>Yoga</Button>
                    </TagLinks>
                    <TagInfoWrap>
                        <ImageWrapper>
                            <TagPicture src={workout_1} />
                        </ImageWrapper>
                        <TextWrap>
                            <SectionHeader size="medium">
                            A short title works
                            </SectionHeader> 
                            best At home to gym, crossfit to pilates, yoga to bodyweight, as well as healthy and easy to make breakfasts, lunches, dinners and snacks. We want to make sure you enjoy the journey for a healthy lifestyle.
                        </TextWrap>
                    </TagInfoWrap>
                </ExerciseWrap>
                <NutritionWrap>
                    <TextWrap color="white">
                        <SectionHeader size="large" color="white">
                            Nutrition
                        </SectionHeader>
                        <TagLinks flexPosition="flex-start">
                            <Button type="tagLink" color='dirtyWhite' onhover="white" btmLine={{ width: '160%', height: '1px' }}>healthy</Button>
                            <Button type="tagLink" color='dirtyWhite' onhover="white" btmLine={{ width: '160%', height: '1px' }}>healthy</Button>
                            <Button type="tagLink" color='dirtyWhite' onhover="white" btmLine={{ width: '160%', height: '1px' }}>healthy</Button>
                        </TagLinks>
                        <SectionHeader size="medium" color="white">
                        A short title works
                        </SectionHeader> 
                        best At home to gym, crossfit to pilates, yoga to bodyweight, as well as healthy and easy to make breakfasts, lunches, dinners and snacks. We want to make sure you enjoy the journey for a healthy lifestyle.
                    </TextWrap>
                        <ImageWrapper>
                            <TagPicture src={food_1} />
                        </ImageWrapper>
                </NutritionWrap>
            </Wrapper>
        </SectionTwoWrap>
    )
}
export default SectionTwo