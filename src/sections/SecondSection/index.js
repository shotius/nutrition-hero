import React, {useState} from 'react'
import Button from '../../shared/components/Button'
import SectionHeader from '../../shared/components/SectionHeader'
import { Wrapper } from '../../Styles'
import { ExerciseWrap, NutritionWrap, SectionTwoWrap, TagInfoWrap, TagLinks, TagPicture, TextWrap, ImageWrapper } from './Styles'
import workout_1 from '../../shared/assests/Mail_Image.png'
import workout_2 from '../../shared/assests/ladyathome.jpg'
import workout_3 from '../../shared/assests/yogalady.jpg'
import food_1 from '../../shared/assests/Rectangle 1473.png'


const SectionTwo = React.forwardRef((props,  ref) => {
    const data = [
        {
            img: workout_1,
            header: ' A short title works',
            text: ' best At home to gym, crossfit to pilates, yoga to bodyweight, as well as healthy and easy to make breakfasts, lunches, dinners and snacks. We want to make sure you enjoy the journey for a healthy lifestyle.'
        },
        {
            img: workout_2,
            header: 'Bla bla bla',
            text: ' segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche'
        },
        {
            img: workout_3,
            header: 'yoga is best',
            text: 'on la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.'
        }
    ]
    const [activeIndex, setActiveIndex] = useState(0)

    return (    
        <SectionTwoWrap>
            <Wrapper>
                <ExerciseWrap>
                    <SectionHeader exercisesRef={exercisesRef} size="large" flexPosition="center">
                        Exercise
                    </SectionHeader>
                    <TagLinks flexPosition="center">
                        <Button type="tagLink" isActive={activeIndex === 0 && true } color="Grey" onhover="black" onClick={() => setActiveIndex(0)}>Home</Button>
                        <Button type="tagLink" isActive={activeIndex === 1 && true } color="Grey" onhover="black" onClick={() => setActiveIndex(1)}>Gym</Button>
                        <Button type="tagLink" isActive={activeIndex === 2 && true } color="Grey" onhover="black" onClick={() => setActiveIndex(2)}>Yoga</Button>
                    </TagLinks>
                    <TagInfoWrap>
                        <ImageWrapper>
                            <TagPicture src={data[activeIndex].img} />
                        </ImageWrapper>
                        <TextWrap>
                            <SectionHeader size="medium">
                                {data[activeIndex].header}
                            </SectionHeader> 
                            {data[activeIndex].text}
                        </TextWrap>
                    </TagInfoWrap>
                </ExerciseWrap>
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
                        best At home to gym, crossfit to pilates, yoga to bodyweight, as well as healthy and easy to make breakfasts, lunches, dinners and snacks. We want to make sure you enjoy the journey for a healthy lifestyle.
                    </TextWrap>
                        <ImageWrapper>
                            <TagPicture src={food_1} />
                        </ImageWrapper>
                </NutritionWrap>
            </Wrapper>
        </SectionTwoWrap>
    )
})
export default SectionTwo