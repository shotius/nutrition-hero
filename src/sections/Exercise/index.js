import React, {useState} from 'react'
import Button from '../../shared/components/Button'
import SectionHeader from '../../shared/components/SectionHeader'
import { ExerciseWrap, Header,  TagLinks,SectionDots,  Img, TextWrap, ImageWrapper, Text, ExerciseBackground, InfoWrapper } from './Styles'
import workout_1 from '../../shared/assests/Mail_Image.png'
import workout_2 from '../../shared/assests/ladyathome.jpg'
import workout_3 from '../../shared/assests/yogalady.jpg'
import { Wrapper } from '../../Styles'
import {Dot} from '../Carousels/Slider/Styles'


const Exercise = React.forwardRef((props,  ref) => {
    const data = [
        {   
            id: 0,
            heading: "Gym",
            img: workout_1,
            header: ' A short title works',
            text: ' best At home to gym, crossfit to pilates, yoga to bodyweight, as well as healthy and easy to make breakfasts, lunches, dinners and snacks. We want to make sure you enjoy the journey for a healthy lifestyle.'
        },
        {
            id: 1,
            heading: 'Home',
            img: workout_2,
            header: 'Bla bla bla',
            text: ' segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche'
        },
        {
            id: 2,
            heading: "Yoga",
            img: workout_3,
            header: 'yoga is the best',
            text: 'on la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.'
        }
    ]
    const [activeIndex, setActiveIndex] = useState(0)


    return (    
        <ExerciseBackground>
            <Wrapper>
                <ExerciseWrap>
                    <Header  size="large" flexPosition="center">
                        Exercise
                    </Header>
                    <InfoWrapper>
                        <TagLinks flexPosition="center">
                        {data.map((data) => (
                                <Button
                                    key={data.id} 
                                    type="tagLink" 
                                    isActive={activeIndex === data.id && true } 
                                    color="Grey" 
                                    onhover="black" 
                                    onClick={() => setActiveIndex(data.id)}>{data.heading}</Button>    
                            )
                        )}
                        </TagLinks>
                        <ImageWrapper>
                            <Img src={data[activeIndex].img} />
                        </ImageWrapper>
                        <TextWrap>
                            <SectionHeader size="medium">
                                {data[activeIndex].header}
                            </SectionHeader>
                            <Text>
                                {data[activeIndex].text}
                            </Text>
                        </TextWrap>
                        <SectionDots>
                        {data.map((data) => (
                                <Dot
                                    key={data.id}
                                    isActive={activeIndex === data.id && true} 
                                    onClick={() => setActiveIndex(data.id)}
                                    />
                            )
                        )}
                        </SectionDots>
                    </InfoWrapper>
                    </ExerciseWrap>
            </Wrapper>
        </ExerciseBackground>
    )
})
export default Exercise