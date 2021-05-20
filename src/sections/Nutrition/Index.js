import React from 'react'
import Button from '../../shared/components/Button'
import SectionHeader from '../../shared/components/SectionHeader'
import { TextWrap, NutritionText, NutritionBackground, NutritionWrap } from './Styles'
import { ImageWrapper, Img, TagLinks } from '../Exercise/Styles'
import food_1 from '../../shared/assests/Rectangle 1473.png'


const Nutrition = React.forwardRef((props,  ref) => {
    return (    
        <NutritionBackground>
            <NutritionWrap>
                <TextWrap color="white">
                    <SectionHeader size="large" color="white">
                        Nutrition
                    </SectionHeader>
                    <TagLinks flexPosition="flex-start">
                        <Button type="tagLink" color='dirtyWhite' onhover="white">healthy</Button>
                        <Button type="tagLink" color='dirtyWhite' onhover="white">healthy</Button>
                        <Button type="tagLink" color='dirtyWhite' onhover="white">healthy</Button>
                    </TagLinks>
                    <SectionHeader size="medium" color="white">
                    A short title works
                    </SectionHeader> 
                    <NutritionText>
                        best At home to gym, crossfit to pilates, yoga to bodyweight, as well as healthy and easy to make breakfasts, lunches, dinners and snacks. We want to make sure you enjoy the journey for a healthy lifestyle.
                    </NutritionText>
                </TextWrap>
                <ImageWrapper>
                     <Img src={food_1} />
                </ImageWrapper>
            </NutritionWrap>
        </NutritionBackground>
    )
})
export default Nutrition