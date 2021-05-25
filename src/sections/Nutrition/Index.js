import React, {useState} from 'react'
import Button from '../../shared/components/Button'
import { TextWrap, NutritionText, NutritionBackground, NutritionWrap, Nav, ImageWrap, TextHeader, Header} from './Styles'
import { Img, SectionDots } from '../Exercise/Styles'
import food_1 from '../../shared/assests/Rectangle 1473.png'
import food_2 from '../../shared/assests/food_2.png'
import { Dot } from '../Carousels/Slider/Styles'


const Nutrition = React.forwardRef((props,  ref) => {
    const [activeIndex, setActiveIndex] = useState(0)
   
    const data = [
        {   
            id: 0,
            heading: "Healty",
            img: food_1,
            header: ' A short title works',
            text: ' best At home to gym, crossfit to pilates, yoga to bodyweight, as well as healthy and easy to make breakfasts, lunches, dinners and snacks. We want to make sure you enjoy the journey for a healthy lifestyle.'
        },
        {
            id: 1,
            heading: 'Proffesioanl',
            img: food_2,
            header: 'Bla bla bla',
            text: ' segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche'
        },
    ]


    return (    
        <NutritionBackground>
            <NutritionWrap>
                <Header size="large" color="white" ref={ref}>
                    Nutrition
                </Header>
                <Nav>
                    {data.map(data => (
                        <Button 
                            key={data.id}
                            type="tagLink" 
                            color='dirtyWhite' 
                            isActive={activeIndex === data.id && true}
                            onhover="white"
                            onClick={() => setActiveIndex(data.id)}
                            >
                                {data.heading}
                        </Button>
                    ))}
                </Nav>
                <ImageWrap>
                    <Img src={data[activeIndex].img} />
                </ImageWrap>
                <TextWrap color="white">
                    <TextHeader size="medium" color="white">
                        {data[activeIndex].header}
                    </TextHeader>
                    <NutritionText>
                       {data[activeIndex].text}
                    </NutritionText>
                </TextWrap>
                <SectionDots>
                    {data.map(data => (
                        <Dot 
                            key={data.id}
                            isActive={activeIndex === data.id && true}
                            onClick={() => setActiveIndex(data.id)}
                            />
                    ))}
                </SectionDots>
            </NutritionWrap>
        </NutritionBackground>
    )
})
export default Nutrition